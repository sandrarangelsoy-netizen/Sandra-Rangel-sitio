"use client";

import { useEffect, useState } from "react";

const WORDS = ["actúe.", "se prepare.", "se proteja."];

export function RotatingWord() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setActive(1);
      interval = setInterval(() => setActive((k) => (k + 1) % WORDS.length), 2800);
    }, 2400);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, []);

  return (
    <span className="-mb-[.1em] inline-grid overflow-hidden pb-[.1em] align-bottom">
      {WORDS.map((word, i) => {
        const prev = (active - 1 + WORDS.length) % WORDS.length;
        const transform =
          i === active ? "translateY(0%)" : i === prev ? "translateY(-100%)" : "translateY(100%)";
        return (
          <span
            key={word}
            aria-hidden={i !== active}
            className="font-medium italic text-naranja [grid-area:1/1]"
            style={{
              transform,
              opacity: i === active ? 1 : 0,
              transition: "transform .9s cubic-bezier(.22,1,.36,1), opacity .6s",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
