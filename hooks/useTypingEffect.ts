"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through `strings` with a typing + deleting animation.
 * Returns the current display string.
 */
export function useTypingEffect(strings: string[], typingSpeed = 80, deletingSpeed = 50, pauseMs = 1800): string {
  const [display, setDisplay]   = useState("");
  const [index, setIndex]       = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index % strings.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(current.substring(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        setDisplay(current.substring(0, display.length - 1));
        if (display.length - 1 === 0) {
          setIsDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [display, index, isDeleting, strings, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}
