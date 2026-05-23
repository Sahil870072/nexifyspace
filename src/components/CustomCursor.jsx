import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Move dot instantly via transform for best performance
      if (dot) {
        dot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (ring) {
        ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    const onEnter = () => {
      dot?.classList.add('hovered');
      ring?.classList.add('hovered');
    };
    const onLeave = () => {
      dot?.classList.remove('hovered');
      ring?.classList.remove('hovered');
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });

    const attachListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    attachListeners();
    // Re-attach after dynamic content renders
    const timer = setTimeout(attachListeners, 800);

    raf = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor"
        style={{ position: 'fixed', top: 0, left: 0, willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ position: 'fixed', top: 0, left: 0, willChange: 'transform' }}
      />
    </>
  );
}
