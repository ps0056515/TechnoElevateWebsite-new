import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedCounter({ value, suffix = '', duration = 1500, once = false }) {
  const isNumeric = !isNaN(Number(value));
  const numVal = isNumeric ? Number(value) : 0;
  
  // If target number is 10 or more, start 15% less (e.g. 85% of target). Otherwise start from 0.
  const startVal = isNumeric && numVal >= 10 ? Math.floor(numVal * 0.85) : 0;
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once, margin: '-50px' });

  const { number } = useSpring({
    from: { number: startVal },
    to: { number: isInView && isNumeric ? numVal : startVal },
    config: { duration, tension: 120, friction: 14 },
  });

  if (!isNumeric) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      <animated.span>
        {number.to((n) => Math.floor(n))}
      </animated.span>
      {suffix}
    </span>
  );
}

