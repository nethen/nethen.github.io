import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { grid, ToggleGrid } from "./components/ToggleGrid";
import { motion } from "framer-motion";
import { useWindowSize, useIsClient } from "usehooks-ts";
import { Navbar } from "./components/Nav/Navbar";

export default function Home() {
  const { width = 0 } = useWindowSize();
  const isClient = useIsClient();

  return (
    <>
      <ToggleGrid />
      <Navbar />
      <main
        className={clsx(
          "px-m1 lg:px-r2 h-full relative flex flex-col gap-y-m2 lg:gap-y-r2"
        )}
      >
        <article
          className={clsx(
            grid,
            "gap-y-m2 lg:gap-y-r2 relative pt-m2 lg:pt-r2 pb-m4 lg:mb-r4"
          )}
        >
          {width >= 1024 && isClient && (
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
              "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2"
            )}
          >
            <figure className="col-span-full lg:col-start-2 lg:col-span-6 aspect-square lg:aspect-video w-full min-h-[60svh] lg:min-h-[80svh] lg:h-full bg-neutral-100 dark:bg-neutral-900 rounded-3xl flex flex-col justify-center items-center p-m1 lg:p-r2">
              <svg className="w-full h-full bg-red-500"></svg>
            </figure>
            <div className="absolute inset-0  h-full flex flex-col justify-end items-center">
              <div className="sticky bottom-m4 lg:bottom-r2  flex flex-col items-center">
                <Link href="/visualizations" className="">
                  <motion.div className="w-fit leading-none px-m1 py-2 lg:py-3 rounded-full bg-foreground text-background">
                    View sketch <motion.span>&rarr;</motion.span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </section>
        </article>
        <article
          className={clsx(
            grid,
            "gap-y-m2 lg:gap-y-r2 relative pt-m2 lg:pt-r2 pb-m4 lg:pb-r4"
          )}
        >
          {width >= 1024 && isClient && (
            <span className="sticky top-28 block text-m-lg lg:text-r-lg">
              &#63;
            </span>
          )}
          <section
            className={clsx(
              "col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2"
            )}
          >
            <h2>About</h2>
            <p className="opacity-50 mb-[1em]">
              D is For Data is a collection of sketches made by Vancouver-based
              design engineer, Nathan Lew.
            </p>
            <p className="opacity-50 mb-[1em]">
              With agency and startup experience at Invoke Digital and Guusto
              Gifts, he has worked with leading automotive clients &amp;
              initiatives for social good.
            </p>
            <p className="opacity-50">
              He is currently pursuing a Bachelor&apos;s of Science in
              Interactive Arts &amp; Technology at Simon Fraser
              University&mdash;specifically concentrating in interaction design
              &amp; cross-platform development.
            </p>
          </section>
          <section
            className={clsx(
              "col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2"
            )}
          >
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
          </section>
          <section
            className={clsx(
              "col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2"
            )}
          >
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="mailto:nathan_lew@sfu.ca" target="_blank">
                  nathan_lew&#64;sfu.ca
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/nathan-lew" target="_blank">
                  linkedin.com/in/nathan-lew
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
