import Image from "next/image";
import clsx from "clsx";
import { grid, ToggleGrid } from "./../components/ToggleGrid";
import { motion } from "framer-motion";
import { useWindowSize, useIsClient } from "usehooks-ts";
import { Navbar } from "../components/Nav/Navbar";
import Link from "next/link";

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
            "gap-y-m2 lg:gap-y-r2 relative pt-m2 lg:pt-r2 pb-m6 lg:mb-r4"
          )}
        >
          {width >= 1024 && isClient && (
            <nav className="sticky top-28 flex flex-col gap-y-r1 h-0">
              <h2 className="text-m-lg lg:text-r-lg">01</h2>
              <ul className="">
                <li>
                  <Link href="#1a">Javascript</Link>
                </li>
                <li>
                  <Link href="#1b">Pure SVG</Link>
                </li>
              </ul>
            </nav>
          )}
          <hgroup
            className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
            id="1a"
          >
            <h2>Naps taken over Week 1</h2>
            <h3 className="opacity-50">Made with SVG elements</h3>
          </hgroup>
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2">
            col-span-full lg:col-span-4 2xl:col-span-3 4xl:col-span-2
          </p>
          <section
            className={clsx(
              "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2 lg:mb-r4"
            )}
          >
            <figure className="col-span-full lg:col-start-2 lg:col-span-6 aspect-square lg:aspect-video w-full min-h-[60svh] lg:min-h-[80svh] lg:h-full bg-gray-100 rounded-3xl flex flex-col justify-center items-center p-m1 lg:p-r2">
              <svg className="w-full h-full bg-red-500"></svg>
            </figure>
          </section>
          <hgroup
            className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
            id="1b"
          >
            <h2>Naps taken over Week 1</h2>
            <h3 className="opacity-50">Made with SVG elements</h3>
          </hgroup>
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2">
            col-span-full lg:col-span-4 2xl:col-span-3 4xl:col-span-2
          </p>
          <section
            className={clsx(
              "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2 lg:mb-r6"
            )}
          >
            <figure className="col-span-full lg:col-start-2 lg:col-span-6 aspect-square lg:aspect-video w-full min-h-[60svh] lg:min-h-[80svh] lg:h-full bg-gray-100 rounded-3xl flex flex-col justify-center items-center p-m1 lg:p-r2">
              <svg className="w-full h-full bg-red-500"></svg>
            </figure>
          </section>
        </article>
      </main>
    </>
  );
}
