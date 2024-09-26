import { useEffect, useRef, useState } from "react";
import { useIsClient, useCounter, useWindowSize } from "usehooks-ts";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useMousePosition } from "./../../contexts/useMousePosition";

export const SketchJS = () => {
  const isClient = useIsClient();
  const { width = 0, height = 0 } = useWindowSize();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mousePosition = useMousePosition();
  const mode = useCounter(0);

  const colors = {
    fore: [
      "var(--foreground)",
      "#2ca25f",
      "#9ebcda",
      "#a8ddb5",
      "#fdbb84",
      "#a6bddb",
      "#a6bddb",
    ],
    back: [
      "var(--background)",
      "#99d8c9",
      "#8856a7",
      "#43a2ca",
      "#e34a33",
      "#2b8cbe",
      "#1c9099",
    ],
  };

  const [positions, setPositions] = useState(
    new Array(100).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.floor(10 + Math.random() * 20),
    }))
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    x.set(mousePosition.x);
    y.set(mousePosition.y);
  }, [mousePosition, x, y]);

  const offsetPx = {
    x: useTransform(x, [0, width], [-10, 10]),
    y: useTransform(y, [0, height], [-10, 10]),
  };

  const offsetRel = {
    x: useTransform(x, [0, width], [0, 100]),
    y: useTransform(y, [0, height], [0, 100]),
  };

  return (
    <svg
      className="w-full h-full rounded-lg"
      onClick={() => {
        const curr = mode.count;
        if (curr == colors.fore.length - 1) mode.reset();
        else mode.increment();
        setPositions(
          positions.map((pos) => ({
            ...pos,
            size: Math.floor(10 + Math.random() * 20),
            x: pos.x + Math.random() * 10 - 5,
          }))
        );
      }}
      ref={ref}
    >
      <motion.rect
        initial={{ fill: "var(--midground)" }}
        animate={{
          fill: colors.back[mode.count],
        }}
        width="100%"
        height="100%"
      />

      <AnimatePresence>
        {isClient &&
          isInView &&
          positions.map((pos, i) => (
            <motion.circle
              initial={{
                r: 0,
                fill: "var(--midground)",
                cx: pos.x + "%",
                cy: pos.y + "%",
              }}
              animate={{
                r: isInView
                  ? Math.abs(pos.x - offsetRel.x.get()) < 20 &&
                    Math.abs(pos.y - offsetRel.y.get()) < 20
                    ? pos.size
                    : pos.size / 2
                  : 0,
                // r: pos.size,
                x: offsetPx.x.get(),
                y: offsetPx.y.get(),
                fill: colors.fore[mode.count],
                cx: pos.x + "%",
                cy: pos.y + "%",
              }}
              exit={{
                r: 0,
                fill: "var(--midground)",
                cx: pos.x + "%",
                cy: pos.y + "%",
              }}
              transition={{ duration: 0.3 }}
              key={`w2b-circle-${i}`}
              className="outline-none"
            />
          ))}
      </AnimatePresence>
    </svg>
  );
};

export default SketchJS;
