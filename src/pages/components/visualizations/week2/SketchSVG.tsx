import { useIsClient, useWindowSize } from "usehooks-ts";

export const SketchSVG = () => {
  const { width = 0 } = useWindowSize();
  const isClient = useIsClient();
  return (
    <svg
      // width="1080"
      // height="1080"
      // viewBox="0 0 1080 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // preserveAspectRatio="none"
      className="w-full h-full bg-blue-500 rounded-lg"
    >
      <rect fill="white" width="100%" height="100%" />
      <svg
        x="0"
        y="8.33%"
        width="16.2%"
        height="72.2%"
        // viewBox="0 0 176 780"
        // preserveAspectRatio="none"
        preserveAspectRatio="xMinYMin meet"
      >
        {[840, 760, 680, 600, 520, 440, 360, 280, 200, 120].map((y, i) => (
          <text
            x="100%"
            y={`${3.84 + 10.2 * i}%`}
            fill="black"
            textAnchor="end"
            alignmentBaseline="middle"
            className="text-[max(16px,min(2vh,3vw))] opacity-50"
            key={`w2a-time-${9 - i}`}
          >
            {0.5 * (9 - i)}hr
          </text>
        ))}
      </svg>
      <svg
        width="77%"
        height="66%"
        x="18%"
        y="11%"
        viewBox="0 0 840 720"
        preserveAspectRatio="none"
      >
        <g opacity="0.5" stroke="black">
          {Array.from({ length: 10 }, (_, i) => (
            <path d={`M0 ${80 * i} H840`} key={`w2a-gridline-${i}`} />
          ))}
        </g>
        <g fill="#99d8c9">
          <rect y="80" width="120" height="640" />
          <rect x="144" y="680" width="120" height="40" />
          <rect x="288" width="120" height="720" />
          <rect x="432" y="600" width="120" height="120" />
          <rect x="576" y="80" width="120" height="640" />
          <rect x="720" y="680" width="120" height="40" />
        </g>
      </svg>
      <svg
        width="77%"
        height="5%"
        x="18%"
        y="83%"
        // preserveAspectRatio="xMinYMin meet"
      >
        {[12, 13, 14, 15, 16, 17].map((d, i) => (
          <text
            // fill="red"
            fill="black"
            x={`${7.7 + 17.15 * i}%`}
            y="0"
            textAnchor="middle"
            alignmentBaseline="text-before-edge"
            key={`w2a-day-sept-${i}`}
            className="text-[max(16px,min(2vh,3vw))] opacity-50"
          >
            {isClient && width >= 640 ? "Sept" : ""} {d}
          </text>
        ))}
      </svg>
      <svg
        width="77%"
        // height=""
        x="18%"
        y="90%"
        // preserveAspectRatio="xMinYMin meet"
      >
        <text
          fill="black"
          x="50%"
          y="0"
          textAnchor="middle"
          alignmentBaseline="text-before-edge"
          className="text-[max(16px,min(2vh,3vw))]"
        >
          Day
        </text>
      </svg>
      {isClient && width >= 640 && (
        <svg width="8.33%" height="72.2%" x="0%" y="8.33%">
          <text
            fill="black"
            transform="rotate(-90)"
            textAnchor="middle"
            x="50%"
            y="50%"
            alignmentBaseline="middle"
            className="text-[max(16px,min(2vh,3vw))] origin-center"
          >
            Duration
          </text>
        </svg>
      )}
    </svg>
  );
};

export default SketchSVG;
