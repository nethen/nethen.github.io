import clsx from "clsx";
import { grid } from "../ToggleGrid";
import { motion } from "framer-motion";
import { useWindowSize, useIsClient } from "usehooks-ts";
import Link from "next/link";

export const Navbar = () => {
  const { width = 0 } = useWindowSize();
  const isClient = useIsClient();

  return (
    <nav
      className={clsx(
        grid,
        "px-m1 lg:px-r2 col-span-full lg:col-span-3 fixed lg:sticky inset-x-0 max-lg:bottom-0 lg:top-0 py-m1 lg:py-r1 z-50 bg-background"
      )}
    >
      <ul className="col-span-full grid grid-cols-subgrid">
        <li className="max-lg:col-span-4">
          <Link href="/">Home</Link>
        </li>
        <li className="col-span-4 lg:col-span-2">
          <Link href="/visualizations">Visualizations</Link>
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
