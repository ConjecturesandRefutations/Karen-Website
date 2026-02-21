// hooks/useScrollScale.js
import { useEffect, useRef, useState } from "react";

export default function useScrollScale(minScale = 0.7) {
  const ref = useRef(null);
  const [scale, setScale] = useState(minScale);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const calculate = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 3;
      const elementCenter = rect.top + rect.height / 2;

      // Distance from center as a ratio (0 = dead centre, 1 = fully off screen)
      const distance = Math.abs(viewportCenter - elementCenter);
      const maxDistance = window.innerHeight / 2 + rect.height / 2;
      const proximity = 1 - Math.min(distance / maxDistance, 1);

      // Map proximity to scale range [minScale, 1]
      const newScale = minScale + proximity * (1 - minScale);
      setScale(newScale);
    };

    calculate();
    window.addEventListener("scroll", calculate, { passive: true });
    window.addEventListener("resize", calculate, { passive: true });

    return () => {
      window.removeEventListener("scroll", calculate);
      window.removeEventListener("resize", calculate);
    };
  }, [minScale]);

  return { ref, scale };
}