import Head from "next/head";
import clsx from "clsx";
import { grid } from "@/components/Grid/ToggleGrid";
import { useWindowSize, useIsClient } from "usehooks-ts";
import Link from "next/link";
import { SketchSVG } from "@/components/visualizations/week2/SketchSVG";
import { SketchJS } from "@/components/visualizations/week2/SketchJS";
import Figure from "@/components/Layout/Figure";
import { useEffect } from "react";
import { useLenis } from "lenis/react";

export default function Visualizations() {
  const { width = 0 } = useWindowSize();
  const isClient = useIsClient();

  const lenis = useLenis();

  // useEffect(() => {
  //   lenis?.scrollTo(0, { immediate: true, force: true });
  // }, [lenis]);

  return (
    <>
      <Head>
        <title>Vis &mdash; D is for Data</title>
        <meta
          property="og:title"
          content="Vis &mdash; D is for Data"
          key="title"
        />
        <meta
          name="description"
          content="A collection of sketches made by Vancouver-based design engineer, Nathan Lew. Built as part of IAT355: Introduction to Visual Analytics at Simon Fraser University."
        />
        <meta
          property="og:description"
          content="A collection of sketches made by Vancouver-based design engineer, Nathan Lew. Built as part of IAT355: Introduction to Visual Analytics at Simon Fraser University."
          key="description"
        />
        <meta
          name="keywords"
          content="Visual Analytics, Data Visualization, Vis, IAT355, Simon Fraser University, SFU, Information Design, Human-Computer Interaction, HCI, Tableau, Visual Encoding, UI Design, UX Design"
        />
        <meta name="author" content="Nathan Lew" />
      </Head>
      <article
        className={clsx(
          grid,
          "gap-y-m2 lg:gap-y-r2 relative pt-m1 lg:pt-r1 pb-m6 lg:mb-0"
        )}
      >
        {width >= 1024 && isClient && (
          <nav className="sticky top-28 flex flex-col gap-y-r1 h-0">
            <h2 className="text-m-lg lg:text-r-lg">02</h2>
            <ul className="">
              <li>
                <Link href="#sketch-1a">SVG</Link>
              </li>
              <li>
                <Link href="#sketch-1b">JS</Link>
              </li>
            </ul>
          </nav>
        )}
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="sketch-1a"
        >
          <h2>Naps taken over Week 1</h2>
          {/* <h3 className="opacity-50">Made with SVG elements</h3> */}
        </hgroup>
        <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
          A nice review of the SVG coordinate system and elements. A notable
          challenge was preventing distortion of elements when the viewport was
          resized. Fixes involved a mix of relative units (%) and alignment
          using the preserveAspectRatio attribute.
        </p>
        <section
          className={clsx(
            "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2 lg:mb-r4"
          )}
        >
          <Figure>
            <SketchSVG />
          </Figure>
        </section>
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="sketch-1b"
        >
          <h2>Chameleon Skin</h2>
        </hgroup>
        <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
          Randomly generated mouse-reactive circles, each enlarging based on the
          cursor relative to the screen. Click inside to recolour and update the
          texture. All movements are controlled by Framer Motion.
        </p>
        <section
          className={clsx(
            "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2 lg:mb-0"
          )}
        >
          <Figure>
            <SketchJS />
          </Figure>
        </section>
      </article>
    </>
  );
}
