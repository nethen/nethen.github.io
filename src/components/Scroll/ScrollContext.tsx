import { ReactLenis } from "lenis/react";

export const ScrollContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ReactLenis root options={{ wheelMultiplier: 0.75 }}>
      {children}
    </ReactLenis>
  );
};

export default ScrollContainer;
