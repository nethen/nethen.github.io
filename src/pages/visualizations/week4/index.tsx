import Head from "next/head";
import clsx from "clsx";
import { grid } from "@/components/Grid/ToggleGrid";
import { useWindowSize, useIsClient } from "usehooks-ts";
import Link from "next/link";
import { Figure } from "@/components/Layout/Figure";
// import { useEffect } from "react";
// import { useLenis } from "lenis/react";
import D3Test from "@/components/visualizations/week4/D3Test";

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
          content="Week 4 &mdash; D is for Data"
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

        <section
          className={clsx(
            "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2 lg:mb-r4"
          )}
        >
          <Figure className="tracking-normal">
            <D3Test />
          </Figure>
        </section>
      </article>
    </>
  );
}
