import { useIsClient, useWindowSize } from "usehooks-ts";
import { createClassFromSpec, Vega } from "react-vega";
// import * as dt from "@/data/week3/videogames_long.csv";
import { VisualizationSpec } from "react-vega";
import vg from "vega";

// export const W3Visualization1 = () => {
//   const _spec = {
//     width: 400,
//     height: 200,
//   };

//   return <Vega spec={_spec} renderer="svg" className="bg-red-500" />;
// };

export const W3Visualization1 = createClassFromSpec({
  spec: {
    // $schema: "https://vega.github.io/schema/vega/v5.json",
    width: 600,
    height: 400,
    padding: { left: 5, right: 5, top: 5, bottom: 5 },

    data: [
      {
        name: "table",
        url: "/data/week3/videogames_long.csv",
        format: { type: "csv" },
      },
    ],

    // signals: [
    //   {
    //     name: "tooltip",
    //     value: {},
    //     on: [
    //       { events: "rect:mouseover", update: "datum" },
    //       { events: "rect:mouseout", update: "{}" },
    //     ],
    //   },
    // ],

    scales: [
      {
        name: "xscale",
        type: "band",
        domain: { data: "table", field: "genre" },
        range: "width",
      },
      {
        name: "yscale",
        domain: { data: "table", field: "sales_amount" },
        nice: true,
        range: "height",
      },
    ],

    axes: [
      { orient: "bottom", scale: "xscale" },
      { orient: "left", scale: "yscale" },
    ],

    marks: [
      {
        type: "rect",
        from: { data: "table" },
        encode: {
          enter: {
            x: { scale: "xscale", field: "genre", offset: 10 },
            width: { scale: "xscale", band: 1, offset: -10 },
            y: {
              scale: "yscale",
              field: "sales_amount",
            },
            y2: { scale: "yscale", value: 0 },
          },
          update: {
            fill: { value: "steelblue" },
          },
          hover: {
            fill: { value: "red" },
          },
        },
      },
      // {
      //   type: "text",
      //   encode: {
      //     enter: {
      //       align: { value: "center" },
      //       baseline: { value: "bottom" },
      //       fill: { value: "#333" },
      //     },
      //     update: {
      //       x: { scale: "xscale", band: 0.5 },
      //       y: { scale: "yscale", offset: -2 },
      //       text: { signal: "tooltip.amount" },
      //       fillOpacity: [
      //         { test: "datum === tooltip", value: 0 },
      //         { value: 1 },
      //       ],
      //     },
      //   },
      // },
    ],
  },
});

export default W3Visualization1;
