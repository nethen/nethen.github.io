import clsx from "clsx";
import { grid } from "@/components/Grid/ToggleGrid";
import { circOut, motion } from "framer-motion";
import {
  useWindowSize,
  useIsClient,
  useBoolean,
  useEventListener,
} from "usehooks-ts";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { width = 0 } = useWindowSize();
  const isClient = useIsClient();
  const { pathname } = useRouter();
  const hasSelection = useBoolean(false);

  const active = useBoolean(false);

  // useEventListener("keydown", (e) => {
  //   if (e.key === "q") {
  //     active.toggle();
  //   }
  // });

  return (
    <header className="fixed lg:sticky inset-x-0 max-lg:bottom-0 lg:top-0 z-50">
      <nav
        className={clsx(
          grid,
          "px-m1 lg:px-r2 col-span-full lg:col-span-3 py-m1 lg:py-r1 bg-background"
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
                transition={{ ease: circOut }}
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
                onHoverStart={() => {
                  hasSelection.setTrue();
                  active.setTrue();
                }}
                onHoverEnd={() => {
                  hasSelection.setFalse();
                  // active.setFalse();
                }}
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
                transition={{ ease: circOut }}
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
      {width >= 1024 && isClient && (
        <motion.div
          className="overflow-hidden absolute bg-background z-50 w-full border-b"
          initial={{ height: 0, borderBottomColor: "var(--background)" }}
          animate={{
            height: active.value ? "auto" : 0,
            borderBottomColor: active.value
              ? "var(--midground)"
              : "var(--background)",
          }}
          onHoverEnd={() => {
            hasSelection.setFalse();
            active.setFalse();
          }}
        >
          <motion.div
            className={clsx(
              grid,
              "px-m1 lg:px-r2 col-span-full lg:col-span-3 inset-x-0 max-lg:bottom-0 lg:top-0 py-m1 lg:py-r1 z-50 bg-background"
            )}
          >
            <ul className="col-span-full grid grid-cols-subgrid">
              {[2, 3, 4].map((i) => (
                <li className="col-span-4 lg:col-span-2">
                  <Link href={`/visualizations/week${i}`} passHref>
                    <motion.div
                      initial={false}
                      animate="animate"
                      whileHover="hover"
                      onHoverStart={() => hasSelection.setTrue()}
                      onHoverEnd={() => hasSelection.setFalse()}
                      className="flex flex-col gap-m1 lg:gap-r1"
                      variants={{
                        initial: { opacity: 0 },
                        animate: { opacity: active.value ? 1 : 0 },
                        exit: { opacity: 0 },
                        hover: { scale: 1.05 },
                      }}
                      onClick={() => {
                        active.setFalse();
                      }}
                    >
                      <motion.div
                        variants={{
                          initial: { background: "var(--midground)" },
                          animate: {
                            background:
                              pathname == `/visualizations/week${i}`
                                ? hasSelection.value
                                  ? "var(--midground)"
                                  : "var(--foreground)"
                                : "var(--midground)",
                          },
                          hover: { background: "var(--foreground)" },
                        }}
                        transition={{ ease: circOut }}
                        className="h-r4 rounded-md"
                      />
                      <motion.div
                        variants={{
                          initial: { color: "var(--midground)" },
                          animate: {
                            color:
                              pathname == `/visualizations/week${i}`
                                ? hasSelection.value
                                  ? "var(--midground)"
                                  : "var(--foreground)"
                                : "var(--midground)",
                          },
                          hover: { color: "var(--foreground)" },
                        }}
                        transition={{ ease: circOut }}
                      >
                        Week {i}
                      </motion.div>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
