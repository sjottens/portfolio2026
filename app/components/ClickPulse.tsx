'use client';

import { useEffect } from "react";

export default function ClickPulse() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const i = document.createElement("i");
      i.className = "pulse";

      i.style.top = `${event.pageY}px`;
      i.style.left = `${event.pageX}px`;

      document.body.appendChild(i);

      setTimeout(() => {
        i.remove();
      }, 1000);
    };

    document.addEventListener("click", handleClick);

    // cleanup on unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}