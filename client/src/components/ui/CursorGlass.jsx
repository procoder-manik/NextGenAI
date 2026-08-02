import { useEffect, useRef } from 'react';

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

export default function CursorGlass() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('ontouchstart' in window) return; // don't show on touch

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;
    let isHover = false;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      inner.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      outer.style.opacity = '1';
    };

    const onLeave = () => {
      outer.style.opacity = '0';
      inner.style.opacity = '0';
    };

    const onEnter = () => {
      outer.style.opacity = '1';
      inner.style.opacity = '1';
    };

    const interactiveSelector = 'a, button, input, textarea, select, [role="button"], label';

    const onHover = () => {
      isHover = true;
      outer.classList.add('cursor-outer--hover');
    };
    const onUnhover = () => {
      isHover = false;
      outer.classList.remove('cursor-outer--hover');
    };

    const addInteractionListeners = (el) => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onUnhover);
    };

    const removeInteractionListeners = (el) => {
      el.removeEventListener('mouseenter', onHover);
      el.removeEventListener('mouseleave', onUnhover);
    };

    const attachToInteractive = () => {
      document.querySelectorAll(interactiveSelector).forEach(addInteractionListeners);
    };

    const detachFromInteractive = () => {
      document.querySelectorAll(interactiveSelector).forEach(removeInteractionListeners);
    };

    const loop = () => {
      outerX = lerp(outerX, mouseX, 0.18);
      outerY = lerp(outerY, mouseY, 0.18);
      outer.style.transform = `translate3d(${outerX - 20}px, ${outerY - 20}px, 0)`;
      rafRef.current = requestAnimationFrame(loop);
    };

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseleave', onLeave);
    attachToInteractive();

    rafRef.current = requestAnimationFrame(loop);

    const observer = new MutationObserver(() => {
      detachFromInteractive();
      attachToInteractive();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseleave', onLeave);
      detachFromInteractive();
      observer.disconnect();
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 transition-opacity duration-200 cursor-outer">
        <div />
      </div>
      <div ref={innerRef} className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 transition-opacity duration-150 cursor-inner">
        <div />
      </div>
    </>
  );
}
