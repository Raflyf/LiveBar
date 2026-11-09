export function setupMotion() {
  const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]
    .filter(target => !target.parentElement?.closest('[data-reveal]'));
  const pause = () => { document.documentElement.dataset.motionPaused = String(document.hidden); };
  pause();
  document.addEventListener('visibilitychange', pause);

  let observer: IntersectionObserver | undefined;
  let resetObserver: IntersectionObserver | undefined;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting && !target.classList.contains('is-revealed')) {
          target.style.setProperty('--reveal-direction', entry.boundingClientRect.top < (entry.rootBounds?.top ?? 0) ? '-1' : '1');
          target.classList.add('is-revealed');
        }
      }
    }, { threshold: 0, rootMargin: '-32px 0px' });
    // Reset well beyond the entry edge so transforms and tiny scroll reversals cannot retrigger it.
    resetObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) entry.target.classList.remove('is-revealed');
      }
    }, { threshold: 0, rootMargin: '160px 0px' });
    targets.forEach(target => {
      target.classList.add('reveal-ready');
      observer?.observe(target);
      resetObserver?.observe(target);
    });
  } else {
    targets.forEach(target => target.classList.add('is-revealed'));
  }

  return () => {
    observer?.disconnect();
    resetObserver?.disconnect();
    targets.forEach(target => {
      target.classList.remove('reveal-ready');
      target.classList.remove('is-revealed');
    });
    document.removeEventListener('visibilitychange', pause);
    delete document.documentElement.dataset.motionPaused;
  };
}

export function setupVideoVisibility(video: HTMLVideoElement) {
  let visible = !('IntersectionObserver' in window);
  let focused = document.hasFocus();
  let eligible = false;
  let manuallyPaused = false;
  const sync = () => {
    eligible = visible && focused && !document.hidden && !video.hidden;
    if (!eligible) video.pause();
    else if (!manuallyPaused && video.paused) {
      video.play().catch(error => {
        if (error.name !== 'AbortError') console.warn('Demo autoplay unavailable; use the video controls.', error);
      });
    }
  };
  const onPause = () => { if (eligible && video.paused) manuallyPaused = true; };
  const onPlay = () => { manuallyPaused = false; if (!eligible) video.pause(); };
  const onFocus = () => { focused = true; sync(); };
  const onBlur = () => { focused = false; sync(); };
  video.addEventListener('pause', onPause);
  video.addEventListener('play', onPlay);
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('focus', onFocus);
  window.addEventListener('blur', onBlur);
  let observer: IntersectionObserver | undefined;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      sync();
    }, { threshold: [0, 0.25] });
    observer.observe(video);
  }
  sync();
  return () => {
    observer?.disconnect();
    document.removeEventListener('visibilitychange', sync);
    window.removeEventListener('focus', onFocus);
    window.removeEventListener('blur', onBlur);
    video.removeEventListener('pause', onPause);
    video.removeEventListener('play', onPlay);
    video.pause();
  };
}
