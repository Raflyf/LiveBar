import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const css = readFileSync('src/index.css', 'utf8');
assert.ok(css.includes('@keyframes section-reveal'));
assert.ok(!css.includes('prefers-reduced-motion'));
const { setupMotion, setupVideoVisibility } = await import('./src/motion.ts');
const listeners = new Map(), windowListeners = new Map(), instances = [];
class Observer {
  observed = []; disconnected = false;
  constructor(callback) { this.callback = callback; instances.push(this); }
  observe(target) { this.observed.push(target); }
  disconnect() { this.disconnected = true; }
}
const targets = Array.from({ length: 2 }, () => {
  const classes = new Set(), styles = {};
  return { parentElement: null, styles, classList: { add: v => classes.add(v), remove: v => classes.delete(v), contains: v => classes.has(v) }, style: { setProperty: (k,v) => { styles[k] = v; } } };
});
globalThis.window = { IntersectionObserver: Observer, addEventListener: (k,v) => windowListeners.set(k,v), removeEventListener: k => windowListeners.delete(k) };
globalThis.IntersectionObserver = Observer;
globalThis.document = { hidden: false, hasFocus: () => true, documentElement: { dataset: {} }, querySelectorAll: () => targets, addEventListener: (k,v) => listeners.set(k,v), removeEventListener: k => listeners.delete(k) };
const cleanup = setupMotion(), reveal = instances[0], reset = instances[1];
assert.ok(targets.every(target => target.classList.contains('reveal-ready')));
const entry = (target, visible, top = 100) => ({ target, isIntersecting: visible, boundingClientRect: { top }, rootBounds: { top: 0 } });
reveal.callback([entry(targets[0], true)]);
assert.ok(targets[0].classList.contains('is-revealed'));
reveal.callback([entry(targets[0], false)]);
assert.ok(targets[0].classList.contains('is-revealed'), 'Crossing the entry edge must not cancel an animation');
reset.callback([entry(targets[0], true)]);
assert.ok(targets[0].classList.contains('is-revealed'));
reset.callback([entry(targets[0], false)]);
assert.ok(!targets[0].classList.contains('is-revealed'), 'Reset only after leaving the wider viewport');
reveal.callback([entry(targets[0], true, -100)]);
assert.ok(targets[0].classList.contains('is-revealed'));
assert.equal(targets[0].styles['--reveal-direction'], '-1');
document.hidden = true; listeners.get('visibilitychange')();
assert.equal(document.documentElement.dataset.motionPaused, 'true');
cleanup(); assert.ok(reveal.disconnected && reset.disconnected); assert.equal(listeners.size, 0);
assert.ok(targets.every(target => !target.classList.contains('reveal-ready')));
document.hidden = false;
const mediaListeners = new Map(); let plays = 0;
const video = { paused: true, hidden: false, currentTime: 9,
  play() { this.paused = false; plays++; mediaListeners.get('play')?.(); return Promise.resolve(); },
  pause() { if (!this.paused) { this.paused = true; mediaListeners.get('pause')?.(); } },
  addEventListener: (k,v) => mediaListeners.set(k,v), removeEventListener: k => mediaListeners.delete(k),
};
const stopVideo = setupVideoVisibility(video), visibility = instances[2];
const show = ratio => visibility.callback([{ target: video, isIntersecting: ratio > 0, intersectionRatio: ratio }]);
assert.equal(plays, 0); show(.6); assert.equal(plays, 1);
show(0); assert.ok(video.paused); show(.6); assert.equal(plays, 2);
assert.equal(video.currentTime, 9);
document.hidden = true; listeners.get('visibilitychange')(); assert.ok(video.paused);
document.hidden = false; listeners.get('visibilitychange')(); assert.ok(!video.paused);
windowListeners.get('blur')(); assert.ok(video.paused);
windowListeners.get('focus')(); assert.ok(!video.paused);
video.pause(); const manualCount = plays; show(0); show(.6); assert.equal(plays, manualCount);
stopVideo(); assert.ok(visibility.disconnected); assert.equal(mediaListeners.size, 0); assert.equal(windowListeners.size, 0);
assert.ok(readFileSync('src/components/FAQ.tsx', 'utf8').includes('inert={openIdx !== idx}'));
console.log('PASS: repeat reveal, direction, video visibility/focus, resume position, manual pause, and cleanup.');
