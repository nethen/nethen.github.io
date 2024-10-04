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
        </hgroup>
        <section
          className={clsx(
            "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2 lg:mb-r4 scroll-m-28"
          )}
        >
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
            The data consists of a variety of videogames sold by various
            publishers from 1980 to 2020. Each item holds nominal data (name,
            publisher, genre, platform and sales region) and quantitative data
            (sales amount by region, global sales, and year).
          </p>
        </section>

        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="1"
        >
          <h2>Global Sales by Genre and Platform</h2>
        </hgroup>
        <section
          className={clsx(
            "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2 lg:mb-r4 scroll-m-28"
          )}
        >
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
            The majority of sales over time seen in larger consoles
            (Playstation, Xbox, and Wii) with the DS as an exception as a
            portable device. Genre-wise, faster pace games such as action,
            shooters and sports simulations tended to be more popular.
          </p>
          <Figure className="tracking-normal">
            <W3Visualization1 />
            <figcaption className="text-midground">
              Hover over each genre on the right for more details
            </figcaption>
          </Figure>
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
            An interesting split between the top console can be found where the
            DS overtakes the PS2 in puzzle, simulation, and adventure games. For
            strategy games at the tail end of total sales, PC reigns supreme.
          </p>
        </section>
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="2"
        >
          <h2>Sales Over Time by Platform and Genre</h2>
        </hgroup>
        <section
          className={clsx(
            "grid grid-cols-subgrid col-span-full  gap-y-m2 lg:gap-y-r2 lg:mb-r4 scroll-m-28"
          )}
        >
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
            In the late 90s and early 2000s, surge in videogame sales can be
            seen, starting from an approximate doubling each decade. 2008 and
            2009 are especially notable for reaching over 650 million units
            sold. These numbers tend to sharply decrease in the 2010s, with less
            data observed closer to 2020.
          </p>
          <Figure>
            <W3Visualization2 />
            <figcaption className="text-midground">
              Drag and brush over a set of years for a closer look
            </figcaption>
          </Figure>
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
            When looking at the data in 5-year intervals, the diversity of
            platforms and available genres beings to flourish. Brushing over the
            era from 1980s into the 2000s allows us to see top genre shift from
            platformers to role-playing games, sports and action games.
          </p>
        </section>
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="3"
        >
          <h2>Regional Sales vs. Platform</h2>
        </hgroup>
        <section
          className={clsx(
            "grid grid-cols-subgrid col-span-full  gap-y-m2 lg:gap-y-r2 lg:mb-r4 scroll-m-28"
          )}
        >
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
            Across all regions, North America holds the highest units sold with
            over 4 billion. When reviewing regional sales ranked from Europe,
            Japan and all other areas seems to cut in half approximately.
          </p>
          <Figure>
            <W3Visualization3 />
            <figcaption className="text-midground">
              Hover over each region on the right for more details
            </figcaption>
          </Figure>
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
            Again, larger consoles like the PS2, PS3, and Wii tended to dominate
            total sales with tight competition between Playstation and Xbox
            especially. Interestingly in Japan, all top platforms tended to be
            from Japanese manufacturers (Sony and Nintendo) with XBox ranking
            18th compared to its usual placement around the top 5.
          </p>
        </section>
        <hgroup
          className="col-span-full lg:col-span-6 lg:col-start-2 text-m-lg lg:text-r-lg scroll-m-28"
          id="4"
        >
          <h2>Breaking Down the Top Ten</h2>
        </hgroup>
        <section
          className={clsx(
            "grid grid-cols-subgrid col-span-full  gap-y-m2 lg:gap-y-r2 lg:mb-r4 scroll-m-28"
          )}
        >
          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
            Using the transform function, each publisher was ranked by their
            volume of games sold. It can be observed that the top 10 publishers
            do make up majority of sales (~70%), with Nintendo taking up a
            relatively larger portion.
          </p>
          <Figure>
            <W3Visualization4 />
            <figcaption className="text-midground">
              Hover over each publisher to see their market share
            </figcaption>
            <p className="text-midground absolute bottom-r2 left-r2 text-[0.5em]">
              Note: "Other" category is broken.
            </p>
          </Figure>

          <p className="col-span-full lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 4xl:col-start-2 4xl:col-span-2 text-midground">
            When focusing on each publisher, the distribution of sales between
            genres is not even&mdash;each specializing in specific types such as
            Nintendo leaning towards platformers and role-playing games. Because
            of this variance in &quot;top genre&quot;, each publisher unevenly
            contributes to the total sales per genre.
          </p>
        </section>
      </article>
    </>
  );
}
