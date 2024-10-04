import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import { grid } from "@/components/Grid/ToggleGrid";
import { motion } from "framer-motion";
import { useWindowSize, useIsClient } from "usehooks-ts";
import { ExternalLink } from "@/components/Link/ExternalLink";
import ExternalInlineLink from "@/components/Link/ExternalInlineLink";
import { Figure } from "@/components/Layout/Figure";
import { SketchSVG } from "@/components/visualizations/week2/SketchSVG";
// import { useLenis } from "lenis/react";

export default function Home() {
  const { width = 0 } = useWindowSize();
  const isClient = useIsClient();

  // const lenis = useLenis();

  // useEffect(() => {
  //   lenis?.scrollTo(0, { immediate: true, force: true });
  // }, [lenis]);

  return (
    <>
      <Head>
        <title>D is for Data</title>
        <meta property="og:title" content="D is for Data" key="title" />
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
          "gap-y-m2 lg:gap-y-r2 relative pt-m1 lg:pt-r1 pb-m4 lg:mb-r4"
        )}
      >
        {width >= 1024 && isClient && (
          <span className="sticky top-28 block text-m-lg lg:text-r-lg">D</span>
        )}
        <section className="col-span-full lg:col-span-6 lg:col-start-2 grid grid-cols-subgrid">
          <hgroup className="col-span-full text-m-lg lg:text-r-lg">
            <h1>
              <span className="lg:hidden">D</span> is for Data
            </h1>
            <h2 className="text-midground">A series of visualizations</h2>
          </hgroup>
        </section>
        <section
          className={clsx(
            "grid grid-cols-subgrid col-span-full gap-y-m2 lg:gap-y-r2"
          )}
        >
          <Figure>
            <SketchSVG />
          </Figure>
          <div className="absolute inset-0  h-full flex flex-col justify-end items-center pointer-events-none">
            <div className="sticky bottom-m4 lg:bottom-r2  flex flex-col items-center">
              <Link
                href="/visualizations/week3"
                className="pointer-events-auto"
              >
                <motion.div className="w-fit leading-none px-m1 py-2 lg:py-3 rounded-full bg-foreground text-background">
                  View latest <motion.span>&rarr;</motion.span>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
      </article>
      <article
        className={clsx(
          grid,
          "gap-y-m2 lg:gap-y-r2 relative pb-m4 pt-m1 lg:pt-r1 lg:pb-r4"
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
          <p className="text-midground mb-[1em]">
            D is For Data is a collection of sketches made by Vancouver-based
            design engineer, Nathan Lew.
          </p>
          <p className="text-midground mb-[1em]">
            With agency and startup experience at{" "}
            <ExternalInlineLink href="https://invokedigital.co">
              Invoke Digital
            </ExternalInlineLink>{" "}
            and{" "}
            <ExternalInlineLink href="https://guusto.com">
              Guusto Gifts
            </ExternalInlineLink>
            , he has worked with leading automotive clients &amp; initiatives
            for social good.
          </p>
          <p className="text-midground">
            He is currently pursuing a Bachelor&apos;s of Science in Interactive
            Arts &amp; Technology at{" "}
            <ExternalInlineLink href="https://sfu.ca/siat.html">
              Simon Fraser University
            </ExternalInlineLink>
            &mdash;specifically concentrating in interaction design &amp;
            cross-platform development.
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
              <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://react.dev">React.js</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://tailwindcss.com">
                Tailwind CSS
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://framer.com/motion">
                Framer Motion
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://usehooks-ts.com">
                useHooks-ts
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.npmjs.com/package/clsx">
                clsx
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://lenis.darkroom.engineering">
                Lenis Scroll
              </ExternalLink>
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
              <ExternalLink href="mailto:nathan_lew@sfu.ca">
                nathan_lew&#64;sfu.ca
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://linkedin.com/in/nathan-lew">
                linkedin.com/in/nathan-lew
              </ExternalLink>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
