'use client';

import { useEffect, useRef } from 'react';

export default function CursorHover() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const hoverElements =
      document.querySelectorAll<HTMLElement>('.cursor-hover');

    const showCursor = () => {
      cursor.style.opacity = '1';
    };

    const hideCursor = () => {
      cursor.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', showCursor);
      el.addEventListener('mouseleave', hideCursor);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);

      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', showCursor);
        el.removeEventListener('mouseleave', hideCursor);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor-circle" />;
}