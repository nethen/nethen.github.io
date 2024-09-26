import { useIsClient, useWindowSize } from "usehooks-ts";

export const SketchSVG = () => {
  const { width } = useWindowSize();
  const isClient = useIsClient();
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full rounded-lg"
    >
      <rect fill="var(--background)" width="100%" height="100%" />
      {/* AXES -- START */}
      <svg
        x="0"
        y="11.33%"
        width="12.5%"
        height="72.2%"
        preserveAspectRatio="xMinYMin meet"
      >
        {[840, 760, 680, 600, 520, 440, 360, 280, 200, 120].map((y, i) =>
          isClient && width >= 640 ? (
            <text
              x="100%"
              y={`${3.84 + 10.2 * i}%`}
              fill="var(--foreground)"
              textAnchor="end"
              alignmentBaseline="middle"
              className="text-[max(16px,min(2vh,3vw))] opacity-50"
              key={`w2a-time-${9 - i}`}
            >
              {0.5 * (9 - i)}hr
            </text>
          ) : (9 - i) % 2 == 1 ? (
            <text
              x="100%"
              y={`${3.84 + 10.2 * i}%`}
              fill="var(--foreground)"
              textAnchor="end"
              alignmentBaseline="middle"
              className="text-[max(16px,min(2vh,3vw))] opacity-50"
              key={`w2a-time-${9 - i}`}
            >
              {0.5 * (9 - i)}hr
            </text>
          ) : (
            <></>
          )
        )}
      </svg>
      <svg width="80%" height="5%" x="15%" y="83%">
        {[
          { day: "Thu", n: 12 },
          { day: "Fri", n: 13 },
          { day: "Sat", n: 14 },
          { day: "Sun", n: 15 },
          { day: "Mon", n: 16 },
          { day: "Tue", n: 17 },
        ].map((d, i) => (
          <text
            fill="var(--foreground)"
            x={`${7.14 + 17.15 * i}%`}
            y="0"
            textAnchor="middle"
            alignmentBaseline="text-before-edge"
            key={`w2a-day-sept-${i}`}
            className="text-[max(16px,min(2vh,3vw))] opacity-50"
          >
            {isClient && width >= 640
              ? `${isClient && width >= 768 ? `${d.day}, ` : ""}Sept`
              : ""}{" "}
            {d.n}
          </text>
        ))}
      </svg>
      {/* AXES -- END */}
      {/* LABELS -- START */}
      <svg width="100%" y="3%" height="8%">
        <text
          fill="var(--foreground)"
          x="50%"
          y="0%"
          textAnchor="middle"
          alignmentBaseline="text-before-edge"
          className="text-[max(16px,min(3vh,4vw))]"
        >
          I tend to nap more every other day
        </text>
      </svg>
      <svg width="80%" x="15%" y="90%">
        <text
          fill="var(--foreground)"
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
        <svg width="8.33%" height="72.2%" x="0%" y="11.33%">
          <text
            fill="var(--foreground)"
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
      {/* LABELS -- END */}
      {/* GRIDLINES -- START */}
      <svg
        width="80%"
        height="66%"
        x="15%"
        y="14%"
        viewBox="0 0 840 720"
        preserveAspectRatio="none"
      >
        <g opacity="0.5" stroke="var(--foreground)">
          {Array.from({ length: 10 }, (_, i) => (
            <path d={`M0 ${80 * i} H840`} key={`w2a-gridline-${i}`} />
          ))}
        </g>
        <g fill="#2ca25f">
          <rect y="80" width="120" height="640" />
          <rect x="144" y="680" width="120" height="40" />
          <rect x="288" width="120" height="720" />
          <rect x="432" y="600" width="120" height="120" />
          <rect x="576" y="80" width="120" height="640" />
          <rect x="720" y="680" width="120" height="40" />
        </g>
      </svg>
      {/* GRIDLINES -- END */}
    </svg>
  );
};

export default SketchSVG;
