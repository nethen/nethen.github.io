import { useRef, useState } from "react";
import { useIsClient, useWindowSize } from "usehooks-ts";
import {
  AnimatePresence,
  circInOut,
  circOut,
  motion,
  useInView,
} from "framer-motion";

export const SketchJS = () => {
  const { width } = useWindowSize();
  const isClient = useIsClient();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [positions, setPositions] = useState(
    new Array(100).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.floor(10 + Math.random() * 20),
    }))
  );

  return (
    <svg
      className="w-full h-full rounded-lg"
      onClick={() => {}}
      ref={ref}
      // viewBox="0 0 1080 1080"
    >
      <rect fill="var(--background)" width="100%" height="100%" />
      <AnimatePresence>
        {isClient &&
          positions.map((pos, i) => (
            <motion.circle
              cx={pos.x + "%"}
              cy={pos.y + "%"}
              initial={{ r: 0 }}
              animate={{ r: isInView ? pos.size : 0 }}
              whileHover={{ r: pos.size * 1.5 }}
              whileTap={{ r: pos.size * 0.5 }}
              transition={{ ease: circOut, duration: 0.3 }}
              fill="var(--foreground)"
              key={`w2b-circle-${i}`}
              className="outline-none"
            />
          ))}
      </AnimatePresence>
    </svg>
  );
};

export default SketchJS;
