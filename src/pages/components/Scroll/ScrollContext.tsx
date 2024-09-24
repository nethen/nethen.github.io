import { ReactLenis } from "lenis/react";

export const ScrollContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default ScrollContainer;
