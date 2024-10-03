import { useEventListener, useIsClient, useWindowSize } from "usehooks-ts";
import { createClassFromSpec, Vega, VegaLite } from "react-vega";
// import * as dt from "@/data/week3/videogames_long.csv";
import { VisualizationSpec } from "react-vega";
import vg from "vega";
import { useState } from "react";

export const W3Visualization1 = createClassFromSpec({
  mode: "vega-lite",
  spec: {
    padding: 5,
    // config: {
    //   background: "white",
    //   // group: {
    //   //   fill: "#dedede",
    //   // },
    // },

    data: {
      url: "/data/week3/videogames_long.csv",
      format: { type: "csv" },
    },

    hconcat: [
      {
        params: [
          {
            name: "highlight",
            select: {
              type: "point",
              on: "pointerover",

              // value: [{ genre: "Shooter" }],
            },
          },
          {
            name: "select",
            select: "point",
          },
        ],
        layer: [
          {
            mark: "bar",
            encoding: {
              x: {
                field: "sales_amount",
                type: "quantitative",
                aggregate: "sum",
              },
              y: { field: "genre", type: "nominal" },
              color: {
                condition: { param: "highlight", empty: false, value: "green" },
                value: "steelblue",
              },
            },
          },
        ],
      },
      {
        mark: "bar",
        encoding: {
          x: {
            field: "sales_amount",
            type: "quantitative",
            aggregate: "sum",
          },
          y: { field: "platform", type: "nominal" },
          // yOffset: { field: "platform" },
          // color: { field: "platform" },
        },
        transform: [
          {
            filter: "datum.genre",
          },
        ],
      },
    ],
  },
});

// export const W3Visualization1 = () => {
//   const [stateX, setStateX] = useState("Shooter");
//   useEventListener("keydown", () => {
//     setStateX("Action");
//   });
//   const spec: VisualizationSpec = {
//     width: 400,
//     height: 400,
//     mark: "bar",
//     encoding: {
//       x: { field: "sales_amount", type: "quantitative", aggregate: "sum" },
//       y: { field: "platform", type: "nominal" },
//       // yOffset: { field: "platform", type: "nominal" },
//       color: {
//         field: "platform",
//         type: "nominal",
//         // condition: {
//         //   param: "sel_genre",
//         //   field: "sales_amount",
//         //   type: "quantitative",
//         // },
//         // value: "grey",
//       },
//     },
//     transform: [
//       // {
//       // filter: `datum.genre == sel_genre || sel_genre == null`,
//       // },
//     ],
//     data: {
//       name: "table",
//       url: "/data/week3/videogames_long.csv",
//       format: { type: "csv" },
//     },
//     params: [
//       {
//         name: "sel_genre",
//         select: {
//           type: "point",
//           fields: ["genre"],
//         },
//         bind: { input: "select", options: [null, "Action", "Shooter"] },
//       },
//     ],
//   };

//   return <VegaLite spec={spec} />;
// };

// export const W3Visualization1 = createClassFromSpec({
//   mode: "vega-lite",
//   spec: {
//     width: 400,
//     height: 400,
//     padding: 5,
//     config: {
//       background: "white",
//       // group: {
//       //   fill: "#dedede",
//       // },
//     },

//     data: [
//       {
//         name: "table",
//         url: "/data/week3/videogames_long.csv",
//         format: { type: "csv" },
//       },
//     ],

//     scales: [
//       {
//         name: "xscale",
//         type: "linear",
//         domain: { data: "table", field: "sales_amount" },
//         nice: true,
//         range: "width",
//       },
//       {
//         name: "yscale",
//         type: "band",
//         domain: { data: "table", field: "genre" },
//         range: "height",
//         padding: 0.2,
//       },
//       {
//         name: "color",
//         type: "ordinal",
//         domain: { data: "table", field: "sales_region" },
//         range: "category",
//       },
//     ],

//     axes: [
//       { orient: "left", scale: "yscale", zindex: 1, labelPadding: 4 },
//       { orient: "bottom", scale: "xscale" },
//     ],

//     marks: [
//       // {
//       //   type: "rect",
//       //   from: { data: "table" },
//       //   encode: {
//       //     enter: {
//       //       y: { scale: "yscale", field: "platform" },
//       //       height: { scale: "yscale", band: 1 },
//       //       x: { scale: "xscale", field: "sales_amount" },
//       //       x2: { scale: "xscale", value: 0 },
//       //       fill: { scale: "color", field: "name" },
//       //     },
//       //   },
//       // },
//       {
//         type: "group",
//         from: {
//           facet: {
//             data: "table",
//             name: "facet",
//             groupby: "genre",
//           },
//         },
//         encode: {
//           enter: {
//             y: { scale: "yscale", field: "genre" },
//           },
//         },
//         signals: [{ name: "height", update: "bandwidth('yscale')" }],

//         scales: [
//           {
//             name: "pos",
//             type: "band",
//             range: "height",
//             domain: { data: "facet", field: "platform" },
//           },
//         ],
//         marks: [
//           {
//             name: "bars",
//             from: { data: "facet" },
//             type: "rect",
//             encode: {
//               enter: {
//                 y: { scale: "pos", field: "platform" },
//                 height: { scale: "pos", band: 1 },
//                 x: { scale: "xscale", field: "sales_amount" },
//                 x2: { scale: "xscale", value: 0 },
//                 fill: { scale: "color", field: "sales_region" },
//               },
//             },
//           },
//         ],
//       },
//     ],
//     autosize: "pad",
//   },
// });

export default W3Visualization1;
