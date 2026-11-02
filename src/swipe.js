/* Horizontal swipe on touch screens: bindSwipe(element, onSwipeLeft, onSwipeRight). Vertical scrolling and inputs are left alone. */
(() => {
  const MIN_DISTANCE = 50;
  const MAX_DURATION = 700;
  function bindSwipe(element, onLeft, onRight) {
    if (!element) return;
    let start = null;
    element.addEventListener("touchstart", event => {
      const touch = event.touches[0];
      start = event.touches.length === 1 && !event.target.closest("input, textarea, select, [contenteditable='true']")
        ? { x: touch.clientX, y: touch.clientY, time: Date.now() } : null;
    }, { passive: true });
    element.addEventListener("touchmove", event => {
      if (event.touches.length > 1) start = null;
    }, { passive: true });
    element.addEventListener("touchend", event => {
      if (!start) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - start.x;
      const dy = touch.clientY - start.y;
      const fast = Date.now() - start.time <= MAX_DURATION;
      start = null;
      if (!fast || Math.abs(dx) < MIN_DISTANCE || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      if (String(window.getSelection?.() || "")) return;
      (dx < 0 ? onLeft : onRight)();
    }, { passive: true });
  }
  window.langLSRWBindSwipe = bindSwipe;
})();
