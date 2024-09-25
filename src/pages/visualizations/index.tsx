import clsx from "clsx";
import { grid, ToggleGrid } from "./../components/ToggleGrid";
import { useWindowSize, useIsClient } from "usehooks-ts";
import { Navbar } from "./../components/Nav/Navbar";
import Link from "next/link";
import { SketchSVG } from "../components/visualizations/week2/SketchSVG";
import { SketchJS } from "../components/visualizations/week2/SketchJS";

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
                  <Link
                    href="#sketch-1a"
                    // onClick={() => {
                    //   lenis?.scrollTo("#sketch-1a");
                    // }}
                  >
                    Javascript
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sketch-1b"
                    // onClick={() => {
                    //   lenis?.scrollTo("sketch-1b");
                    // }}
                  >
                    Pure SVG
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          <hgroup
            className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
            id="sketch-1a"
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
            <figure className="col-span-full lg:col-start-2 lg:col-span-6 aspect-square md:aspect-video w-full min-h-[60svh] lg:min-h-[80svh] lg:h-full bg-neutral-100 dark:bg-neutral-900 rounded-3xl flex flex-col justify-center items-center p-m1 lg:p-r2 overflow-hidden">
              <SketchSVG />
            </figure>
          </section>
          <hgroup
            className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
            id="sketch-1b"
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
            <figure className="col-span-full lg:col-start-2 lg:col-span-6 aspect-square md:aspect-video w-full min-h-[60svh] lg:min-h-[80svh] lg:h-full bg-neutral-100 dark:bg-neutral-900 rounded-3xl flex flex-col justify-center items-center p-m1 lg:p-r2">
              <SketchJS />
            </figure>
          </section>
        </article>
      </main>
    </>
  );
}
