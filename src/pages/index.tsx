import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { grid, ToggleGrid } from "./components/ToggleGrid";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <ToggleGrid />
      <nav
        className={clsx(
          grid,
          "px-4 lg:px-r1 col-span-full lg:col-span-3 fixed lg:sticky inset-x-0 max-lg:bottom-0 lg:top-0 py-4 lg:py-r1"
        )}
      >
        <ul className="col-span-full grid grid-cols-subgrid">
          <li className="max-lg:col-span-4">
            <Link href="/">Home</Link>
          </li>
          <li className="col-span-4 lg:col-span-2">
            <Link href="/visualizations">Visualizations</Link>
          </li>
        </ul>
      </nav>
      <main className={clsx(grid, "px-4 lg:px-r1 bg-background h-full")}>
        <header className="col-span-full grid grid-cols-subgrid">
          <hgroup className="col-span-full text-m-lg lg:text-r-lg">
            <h1>D is for Data</h1>
            <h2 className="opacity-50">A series of visualizations</h2>
          </hgroup>
        </header>
        <section className={clsx(grid, "col-span-full bg-background h-full")}>
          <figure className="col-span-full lg:col-start-2 lg:col-span-6 aspect-video w-full max-h-[60svh] bg-gray-100 rounded-lg">
            <svg></svg>
          </figure>
          <div className="col-span-full flex flex-col justify-center items-center">
            <Link href="/visualizations" className="w-fit">
              <motion.div className="">
                View sketch <motion.span>&rarr;</motion.span>
              </motion.div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
