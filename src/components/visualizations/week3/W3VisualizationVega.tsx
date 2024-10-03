// export const W3Visualization1 = createClassFromSpec({
//   spec: {
//     description: "A simple bar chart with embedded data.",
//     width: 500,
//     padding: 5,
//     config: {
//       background: "white",
//       // group: {
//       //   fill: "#dedede",
//       // },
//     },

//     signals: [
//       {
//         name: "chartHeight",
//         value: 200,
//       },
//       {
//         name: "chartPadding",
//         value: 50,
//       },
//       {
//         name: "height",
//         update: "(chartHeight + chartPadding) * 3",
//       },
//     ],

//     data: [
//       {
//         name: "table",
//         url: "/data/week3/videogames_long.csv",
//         format: { type: "csv" },
//       },
//     ],

//     scales: [
//       {
//         name: "layout",
//         type: "band",
//         domain: ["genre", "platform"],
//         range: "height",
//       },
//       {
//         name: "xscale",
//         type: "linear",
//         domain: { data: "table", field: "sales_amount" },
//         nice: true,
//         range: "width",
//       },
//     ],

//     marks: [
//       {
//         description: "Test1",
//         name: "menu",
//         type: "group",
//         encode: {
//           enter: {
//             y: {
//               scale: "layout",
//               value: "genre",
//               offset: 20,
//             },
//             width: {
//               signal: "width",
//             },
//             height: {
//               signal: "chartHeight",
//             },
//             fill: {
//               value: "transparent",
//             },
//           },
//         },
//         data: [
//           {
//             name: "genres",
//             source: "table",
//           },
//         ],
//         scales: [
//           {
//             name: "yscale",
//             type: "band",
//             domain: { data: "genres", field: "genre" },
//             range: [{ signal: "chartHeight" }, 0],
//           },
//         ],
//         axes: [
//           { orient: "left", scale: "yscale", zindex: 1, labelPadding: 4 },
//           { orient: "bottom", scale: "xscale", zindex: 1, labelPadding: 4 },
//         ],
//         marks: [
//           {
//             type: "rect",
//             name: "genre_bars",
//             encode: {
//               enter: {
//                 y: { scale: "yscale", field: "genre" },
//                 height: { scale: "yscale", band: 1 },
//                 x: { scale: "xscale", field: "sales_amount" },
//                 x2: { scale: "xscale", value: 0 },
//                 fill: { value: "steelblue" },
//               },
//               update: {},
//             },
//           },
//         ],
//       },
//       {
//         description: "Test2",
//         name: "menu2",
//         type: "group",
//         encode: {
//           enter: {
//             y: {
//               scale: "layout",
//               value: "platform",
//               offset: 20,
//             },
//             width: {
//               signal: "width",
//             },
//             height: {
//               signal: "chartHeight",
//             },
//             fill: {
//               value: "transparent",
//             },
//           },
//         },
//         data: [
//           {
//             name: "platforms",
//             source: "table",
//           },
//         ],
//         scales: [
//           {
//             name: "yscale",
//             type: "band",
//             domain: { data: "platforms", field: "platform" },
//             range: [{ signal: "chartHeight" }, 0],
//           },
//         ],
//         axes: [
//           { orient: "left", scale: "yscale", zindex: 1, labelPadding: 4 },
//           { orient: "bottom", scale: "xscale", zindex: 1, labelPadding: 4 },
//         ],
//         marks: [
//           {
//             type: "rect",
//             name: "platform_bars",
//             encode: {
//               enter: {
//                 y: { scale: "yscale", field: "platform" },
//                 height: { scale: "yscale", band: 1 },
//                 x: { scale: "xscale", field: "sales_amount" },
//                 x2: { scale: "xscale", value: 0 },
//                 fill: { value: "steelblue" },
//               },
//               update: {},
//             },
//           },
//         ],
//       },
//     ],
//   },
// });
