import React, {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;

/**
 * Fires once when the element scrolls into view. Never re-triggers.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);

  return { ref, inView } as const;
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** delay in ms */
  delay?: number;
  /** translate distance in px */
  y?: number;
  /** starting scale, e.g. 0.96 */
  scale?: number;
  threshold?: number;
  id?: string;
};

/** Fade + rise scroll reveal. */
export const Reveal = ({
  children,
  as = 'div',
  className = '',
  delay = 0,
  y = 32,
  scale,
  threshold = 0.15,
  id,
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);

  return createElement(
    as,
    {
      ref,
      id,
      className: `reveal ${inView ? 'is-in' : ''} ${className}`.trim(),
      style: {
        ['--reveal-d' as string]: `${delay}ms`,
        ['--reveal-y' as string]: `${y}px`,
        ...(scale ? { ['--reveal-s' as string]: String(scale) } : {}),
      },
    },
    children,
  );
};

/**
 * Heading whose lines slide up from behind an overflow mask.
 * Pass an array of lines, or a string (split on "|").
 */
export const MaskHeading = ({
  lines,
  as = 'h2',
  className = '',
  delay = 0,
  step = 90,
}: {
  lines: string | ReactNode[];
  as?: ElementType;
  className?: string;
  delay?: number;
  step?: number;
}) => {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.2);
  const parts: ReactNode[] = Array.isArray(lines) ? lines : String(lines).split('|');

  return createElement(
    as,
    { ref, className: `${inView ? 'is-in' : ''} ${className}`.trim() },
    parts.map((line, i) => (
      <span className="mask-line" key={i}>
        <span style={{ ['--reveal-d' as string]: `${delay + i * step}ms` }}>{line}</span>
      </span>
    )),
  );
};

/** Counts up from 0 to `value` once scrolled into view. */
export const CountUp = ({
  value,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setShown(value);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setShown(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted =
    decimals > 0
      ? shown.toFixed(decimals)
      : Math.round(shown).toLocaleString('en-US');

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

/** Smoothly animates a number between two values (used by the pricing toggle). */
export const useAnimatedNumber = (target: number, duration = 520) => {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(target);
      fromRef.current = target;
      return;
    }
    const from = fromRef.current;
    if (from === target) return;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (target - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      fromRef.current = target;
    };
  }, [target, duration]);

  return Math.round(display);
};

/** Tracks window scrollY past a threshold (sticky header state). */
export const useScrolled = (offset = 40) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return scrolled;
};
