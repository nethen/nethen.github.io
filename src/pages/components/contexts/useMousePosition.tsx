import { createContext, useContext, useState } from "react";
import { useEventListener } from "usehooks-ts";

type MousePosition = {
  x: number;
  y: number;
};

export const MousePositionContext = createContext<MousePosition | null>(null);

export const MousePositionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mousePosition, setMousePosition] = useState<MousePosition | null>({
    x: 0,
    y: 0,
  });

  useEventListener("mousemove", (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  });
  return (
    <MousePositionContext.Provider value={mousePosition}>
      {children}
    </MousePositionContext.Provider>
  );
};

export const useMousePosition = () => useContext(MousePositionContext);
export default useMousePosition;
