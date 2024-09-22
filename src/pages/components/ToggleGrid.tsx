import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useBoolean, useEventListener } from "usehooks-ts";

export const grid =
  "grid grid-cols-8 px-6 lg:px-12 gap-x-4 lg:gap-x-6 auto-rows-min";

export const ToggleGrid = () => {
  const isGridVisible = useBoolean(false);

  useEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "G") {
      isGridVisible.toggle();
    }
  });

  return (
    <AnimatePresence>
      {isGridVisible.value && (
        <motion.div
          className={clsx(grid, "fixed inset-0")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              className="h-full bg-black/5"
              key={"toggle_grid__cell--" + i}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToggleGrid;
