import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import clsx from "clsx";
import { grid, ToggleGrid } from "./components/ToggleGrid";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <ToggleGrid />
      <nav
        className={clsx(
          grid,
          "col-span-full lg:col-span-3 fixed lg:sticky inset-x-0 max-lg:bottom-0 lg:top-0 py-4"
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
      <main className={clsx(grid, "bg-background h-full")}>
        <header className="col-span-full grid grid-cols-subgrid">
          <h1 className="col-span-full lowercase text-center text-5xl">
            D is for Data
          </h1>
          <h2 className="col-span-full lowercase text-center text-5xl opacity-50">
            A series of visualizations
          </h2>
        </header>
        <section className={clsx(grid, "col-span-full bg-background h-full")}>
          <Link
            href="/visualizations"
            className="col-span-full lg:col-start-2 lg:col-span-6"
          >
            <figure className="aspect-video bg-gray-300">
              <svg></svg>
            </figure>
          </Link>
          <div className="col-span-full flex flex-col justify-center items-center">
            <Link href="/visualizations" className="w-fit underline">
              View sketch
            </Link>
          </div>
        </section>
        <footer className="col-span-full grid-cols-subgrid">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </main>
    </div>
  );
}
