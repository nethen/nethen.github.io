import Image from "next/image";
import clsx from "clsx";
import { grid, ToggleGrid } from "./../components/ToggleGrid";
import { motion } from "framer-motion";
import { useWindowSize, useIsClient } from "usehooks-ts";
import { Navbar } from "../components/Nav/Navbar";

export default function Visualizations() {
  const { width = 0 } = useWindowSize();
  const isClient = useIsClient();

  return (
    <>
      <ToggleGrid />
      <Navbar />
      <main className={clsx("px-m1 lg:px-r2 h-full relative")}>
        <article
          className={clsx(
            grid,
            "gap-y-m2 lg:gap-y-r2 relative pt-m2 lg:pt-r2 pb-m6 lg:mb-r6"
          )}
        >
          {width >= 1024 && isClient && (
            <span className="sticky top-28 block text-m-lg lg:text-r-lg">
              01
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
            <figure className="col-span-full lg:col-start-2 lg:col-span-6 aspect-square lg:aspect-video w-full min-h-[60svh] lg:min-h-[80svh] lg:h-full bg-gray-100 rounded-3xl flex flex-col justify-center items-center p-m1 lg:p-r2">
              <svg className="w-full h-full bg-red-500"></svg>
            </figure>
          </section>
          <section
            className={clsx(
              "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2"
            )}
          >
            <figure className="col-span-full lg:col-start-2 lg:col-span-6 aspect-square lg:aspect-video w-full min-h-[60svh] lg:min-h-[80svh] lg:h-full bg-gray-100 rounded-3xl flex flex-col justify-center items-center p-m1 lg:p-r2">
              <svg className="w-full h-full bg-red-500"></svg>
            </figure>
          </section>
        </article>
        <article
          className={clsx(
            grid,
            "gap-y-m2 lg:gap-y-r2 relative pt-m2 lg:pt-r2 pb-m6 lg:pb-r6"
          )}
        >
          {width >= 1024 && isClient && (
            <span className="sticky top-28 block text-m-lg lg:text-r-lg">
              &#63;
            </span>
          )}
          <section
            className={clsx(
              "grid grid-cols-subgrid col-span-full lg:col-span-6 lg:col-start-2"
            )}
          >
            <hgroup className="col-span-full lg:col-span-4 2xl:col-span-3 4xl:col-span-2">
              <h2>About</h2>
              <p className="opacity-50 mb-[1em]">
                D is For Data is a collection of sketches made by
                Vancouver-based design engineer, Nathan Lew.
              </p>
              <p className="opacity-50 mb-[1em]">
                With agency and startup experience at Invoke Digital and Guusto
                Gifts, he has worked with leading automotive clients &amp;
                initiatives for social good.
              </p>
              <p className="opacity-50 mb-[1em]">
                He is currently pursuing a Bachelor&apos;s of Science in
                Interactive Arts &amp; Technology at Simon Fraser
                University&mdash;specifically concentrating in interaction
                design &amp; cross-platform development.
              </p>
            </hgroup>
          </section>
          <section
            className={clsx(
              "grid grid-cols-subgrid col-span-full lg:col-span-6 lg:col-start-2"
            )}
          >
            <hgroup className="col-span-full lg:col-span-4 2xl:col-span-3 5xl:col-span-2">
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
          <section
            className={clsx(
              "grid grid-cols-subgrid col-span-full lg:col-span-6 lg:col-start-2"
            )}
          >
            <hgroup className="col-span-full lg:col-span-4 2xl:col-span-3 xl:col-span-2">
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
            </hgroup>
          </section>
        </article>
      </main>
    </>
  );
}
