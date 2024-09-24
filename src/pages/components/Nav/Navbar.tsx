import clsx from "clsx";
import { grid } from "../ToggleGrid";
import { motion } from "framer-motion";
import { useWindowSize, useIsClient, useBoolean } from "usehooks-ts";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { width = 0 } = useWindowSize();
  const isClient = useIsClient();
  const { pathname } = useRouter();
  const hasSelection = useBoolean(false);

  return (
    <nav
      className={clsx(
        grid,
        "px-m1 lg:px-r2 col-span-full lg:col-span-3 fixed lg:sticky inset-x-0 max-lg:bottom-0 lg:top-0 py-m1 lg:py-r1 z-50 bg-background"
      )}
    >
      <ul className="col-span-full grid grid-cols-subgrid">
        <li className="max-lg:col-span-4">
          <Link href="/" passHref>
            <motion.div
              initial={false}
              animate="animate"
              whileHover="hover"
              onHoverStart={() => hasSelection.setTrue()}
              onHoverEnd={() => hasSelection.setFalse()}
              variants={{
                initial: { color: "var(--midground)" },
                animate: {
                  color:
                    pathname == "/"
                      ? hasSelection.value
                        ? "var(--midground)"
                        : "var(--foreground)"
                      : "var(--midground)",
                },
                hover: { color: "var(--foreground)" },
              }}
            >
              Home
            </motion.div>
          </Link>
        </li>
        <li className="col-span-4 lg:col-span-2">
          <Link href="/visualizations" passHref>
            <motion.div
              initial={false}
              animate="animate"
              whileHover="hover"
              onHoverStart={() => hasSelection.setTrue()}
              onHoverEnd={() => hasSelection.setFalse()}
              variants={{
                initial: { color: "var(--midground)" },
                animate: {
                  color:
                    pathname == "/visualizations"
                      ? hasSelection.value
                        ? "var(--midground)"
                        : "var(--foreground)"
                      : "var(--midground)",
                },
                hover: { color: "var(--foreground)" },
              }}
            >
              Visualizations
            </motion.div>
          </Link>
        </li>
        {width >= 1024 && isClient && (
          <li className="lg:-col-start-1 lg:text-right">
            <a
              href="https://github.com/nethen/nethen.github.io"
              target="_blank"
            >
              Github
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
