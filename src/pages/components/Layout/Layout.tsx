import clsx from "clsx";
import ToggleGrid from "../ToggleGrid";
import Navbar from "../Nav/Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToggleGrid />
      <Navbar />
      <main className={clsx("px-m1 lg:px-r2 h-full relative")}>{children}</main>
    </>
  );
};

export default Layout;
