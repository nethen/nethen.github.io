import { useIsClient, useWindowSize } from "usehooks-ts";
import { createClassFromSpec, Vega, VegaLite } from "react-vega";
// import * as dt from "@/data/week3/videogames_long.csv";
import { VisualizationSpec } from "react-vega";
import vg from "vega";

export const W3Visualization1 = () => {
  const spec: VisualizationSpec = {
    width: 400,
    height: 400,
    mark: "bar",
    encoding: {
      x: { field: "sales_amount", type: "quantitative" },
      y: { field: "genre", type: "nominal" },
    },
    data: {
      name: "table",
      url: "/data/week3/videogames_long.csv",
      format: { type: "csv" },
    },
  };

  return <VegaLite spec={spec} />;
};

// export const W3Visualization1 = createClassFromSpec({
//   spec: {
//     // $schema: "https://vega.github.io/schema/vega/v5.json",
//     width: 600,
//     height: 600,
//     padding: 5,

//     data: [
//       {
//         name: "table",
//         url: "/data/week3/videogames_long.csv",
//         format: { type: "csv" },
//         transform: [
//           {
//             type: "aggregate",
//             groupby: ["genre"],
//             ops: ["sum"],
//             as: ["genre"],
//           },
//         ],
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
//         range: "category",
//         domain: { data: "table", field: "platform" },
//       },
//     ],

//     axes: [
//       { orient: "left", scale: "yscale", zindex: 1, labelPadding: 4 },
//       { orient: "bottom", scale: "xscale" },
//     ],

//     marks: [
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
//                 fill: { scale: "color", field: "platform" },
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
