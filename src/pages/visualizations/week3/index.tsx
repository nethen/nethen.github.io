import Head from "next/head";
import clsx from "clsx";
import { grid } from "@/components/Grid/ToggleGrid";
import { useWindowSize, useIsClient } from "usehooks-ts";
import Link from "next/link";
import { Figure } from "@/components/Layout/Figure";
// import { useEffect } from "react";
// import { useLenis } from "lenis/react";
import { W3Visualization1 } from "@/components/visualizations/week3/W3Visualization1";
import { W3Visualization2 } from "@/components/visualizations/week3/W3Visualization2";
import { W3Visualization3 } from "@/components/visualizations/week3/W3Visualization3";
import { W3Visualization4 } from "@/components/visualizations/week3/W3Visualization4";

export default function Visualizations() {
  const { width = 0 } = useWindowSize();
  const isClient = useIsClient();

  // const lenis = useLenis();

  // useEffect(() => {
  //   lenis?.scrollTo(0, { immediate: true, force: true });
  // }, [lenis]);

  return (
    <>
      <Head>
        <title>Week 3 &mdash; D is for Data</title>
        <meta
          property="og:title"
          content="Week 3 &mdash; D is for Data"
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
            <h2 className="text-m-lg lg:text-r-lg">03</h2>
            <ul className="">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#1">Vis 1</Link>
              </li>
              <li>
                <Link href="#2">Vis 2</Link>
              </li>
              <li>
                <Link href="#3">Vis 3</Link>
              </li>
              <li>
                <Link href="#4">Vis 4</Link>
              </li>
            </ul>
          </nav>
        )}
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="about"
        >
          <h2>About the Data</h2>
          {/* <h3 className="opacity-50">Made with SVG elements</h3> */}
        </hgroup>
        <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
          A nice review of the SVG coordinate system and elements. A notable
          challenge was preventing distortion of elements when the viewport was
          resized. Fixes involved a mix of relative units (%) and alignment
          using the preserveAspectRatio attribute.
        </p>
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="1"
        >
          <h2>Global Sales by Genre and Platform</h2>
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
          <Figure className="tracking-normal">
            <W3Visualization1 />
            <figcaption className="text-midground">
              Hover over each genre on the right for more details
            </figcaption>
          </Figure>
        </section>
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="2"
        >
          <h2>Sales Over Time by Platform and Genre</h2>
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
            <W3Visualization2 />
            <figcaption className="text-midground">
              Drag and brush over a set of years for a closer look
            </figcaption>
          </Figure>
        </section>
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="3"
        >
          <h2>Regional Sales vs. Platform</h2>
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
            <W3Visualization3 />
            <figcaption className="text-midground">
              Hover over each region on the right for more details
            </figcaption>
          </Figure>
        </section>
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="4"
        >
          <h2>A Visual Story</h2>
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
            <W3Visualization4 />
            <figcaption className="text-midground">
              Hover over each publisher to see their market share
            </figcaption>
          </Figure>
        </section>
      </article>
    </>
  );
}
