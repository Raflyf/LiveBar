import type React from 'react';
import Lenis from 'lenis';

let scroller: Lenis | undefined;
let wakeScroll = () => {};

export function setupSmoothScroll() {
  const lenis = new Lenis({ smoothWheel: true, syncTouch: false, lerp: 0.12, autoRaf: false, respectReducedMotion: false });
  scroller = lenis;
  let frame = 0;
  const tick = (time: number) => {
    frame = 0;
    if (document.hidden) return;
    lenis.raf(time);
    if (lenis.isScrolling === 'smooth') frame = requestAnimationFrame(tick);
  };
  const wake = () => {
    if (!document.hidden && !frame) {
      // Reset the clock after idle so a new wheel gesture does not jump to its destination.
      lenis.raf(performance.now());
      frame = requestAnimationFrame(tick);
    }
  };
  const visibility = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    lenis.scrollTo(lenis.actualScroll, { immediate: true });
  };
  const interrupt = (event: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
      lenis.scrollTo(lenis.actualScroll, { immediate: true });
    }
  };
  lenis.on('virtual-scroll', wake);
  document.addEventListener('visibilitychange', visibility);
  window.addEventListener('keydown', interrupt);
  wakeScroll = wake;
  return () => {
    cancelAnimationFrame(frame);
    document.removeEventListener('visibilitychange', visibility);
    window.removeEventListener('keydown', interrupt);
    lenis.destroy();
    scroller = undefined;
    wakeScroll = () => {};
  };
}

export const scrollToSection = (id: string) => (e?: React.MouseEvent) => {
  e?.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    if (scroller) {
      wakeScroll();
      scroller.scrollTo(el, { offset: -72 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
};
