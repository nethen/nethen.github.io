import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { grid, ToggleGrid } from "./components/ToggleGrid";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

export default function Home() {
  const { width = 0 } = useWindowSize();

  return (
    <>
      <ToggleGrid />
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
        </ul>
      </nav>
      <main className={clsx("px-m1 lg:px-r2 h-full relative")}>
        <article
          className={clsx(grid, "gap-y-m2 lg:gap-y-r2 relative pt-m2 lg:pt-r2")}
        >
          {width >= 1024 && (
            <span className="sticky top-28 block text-m-lg lg:text-r-lg">
              D
            </span>
          )}
          <header className="col-span-full lg:col-span-6 lg:col-start-2 grid grid-cols-subgrid">
            <hgroup className="col-span-full text-m-lg lg:text-r-lg">
              <h1>
                <span className="lg:hidden">D</span> is for Data
              </h1>
              <h2 className="opacity-50">A series of visualizations</h2>
            </hgroup>
          </header>
          <section
            className={clsx(
              "grid grid-cols-subgrid col-span-full h-svh py-m2 lg:py-r2"
            )}
          >
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
        </article>
        <article
          className={clsx(
            grid,
            "gap-y-m2 lg:gap-y-r2 relative pt-m2 lg:pt-r2 h-[80svh]"
          )}
        >
          {width >= 1024 && (
            <span className="sticky top-28 block text-m-lg lg:text-r-lg">
              &#63;
            </span>
          )}
          <section
            className={clsx(
              "grid grid-cols-subgrid col-span-full lg:col-span-6 lg:col-start-2"
            )}
          >
            <hgroup className="col-span-full lg:col-span-6">
              <h2>About</h2>
              <p className="opacity-50 mb-[1em]">
                D is For Data is a collection of sketches made by Canadian
                design engineer, Nathan Lew.
              </p>
              <p className="opacity-50 mb-[1em]">
                With agency and startup experience at Invoke Digital and Guusto
                Gifts, he has worked with leading automotive clients and
                initiatives for social good.
              </p>
              <p className="opacity-50 mb-[1em]">
                He is currently pursuing a Bachelor&apos;s of Science in
                Interactive Arts and Technology at Simon Fraser
                University&mdash;specifically concentrating in interaction
                design and cross-platform development.
              </p>
            </hgroup>
          </section>
          <section
            className={clsx(
              "grid grid-cols-subgrid col-span-full lg:col-span-6 lg:col-start-2"
            )}
          >
            <hgroup className="col-span-full lg:col-span-6">
              <h2>Stack</h2>
              <ul>
                <li>
                  <a href="https://nextjs.org/" target="_blank">
                    Next.js
                  </a>
                </li>
                <li>
                  <a href="https://react.dev" target="_blank">
                    React.js
                  </a>
                </li>
                <li>
                  <a href="https://framer.com/motion" target="_blank">
                    Framer Motion
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/clsx" target="_blank">
                    clsx
                  </a>
                </li>
                <li>
                  <a href="https://lenis.darkroom.engineering" target="_blank">
                    Lenis Scroll
                  </a>
                </li>
              </ul>
            </hgroup>
          </section>
        </article>
      </main>
    </>
  );
}
