export const SketchSVG = () => {
  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="1920" height="1080" fill="white" />
      <text
        fill="black"
        textAnchor="middle"
        alignmentBaseline="middle"
        x="1028"
        y="1000"
      >
        Day
      </text>
      <text
        fill="black"
        textAnchor="middle"
        alignmentBaseline="middle"
        transform="translate(80, 536) rotate(-90)"
      >
        Duration napped (hrs)
      </text>
      <path opacity="0.3" d="M200 896L1856 896" stroke="black" />
      <path opacity="0.3" d="M200 816L1856 816" stroke="black" />
      <path opacity="0.3" d="M200 736L1856 736" stroke="black" />
      <path opacity="0.3" d="M200 656L1856 656" stroke="black" />
      <path opacity="0.3" d="M200 576L1856 576" stroke="black" />
      <path opacity="0.3" d="M200 496L1856 496" stroke="black" />
      <path opacity="0.3" d="M200 416L1856 416" stroke="black" />
      <path opacity="0.3" d="M200 336L1856 336" stroke="black" />
      <path opacity="0.3" d="M200 256L1856 256" stroke="black" />
      <path opacity="0.3" d="M200 176L1856 176" stroke="black" />
      <path
        d="M328 256L608 856L888 176L1168 776L1448 256L1728 856"
        stroke="#127175"
        stroke-width="4"
        stroke-linecap="round"
      />
      {[176, 256, 336, 416, 496, 576, 656, 736, 816, 896]
        .reverse()
        .map((y, i) => (
          <text
            x="160"
            y={y}
            fill="black"
            textAnchor="middle"
            alignmentBaseline="middle"
            // transform="rotate()"
          >
            {i * 0.5}
          </text>
        ))}
      {[12, 13, 14, 15, 16, 17].map((y, i) => (
        <text
          x={328 + 280 * i}
          y={930}
          fill="black"
          textAnchor="middle"
          alignmentBaseline="middle"
          className="text-m-base"
        >
          {"Sept " + y}
        </text>
      ))}
    </svg>
  );
};

export default SketchSVG;
