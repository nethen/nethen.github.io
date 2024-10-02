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
    width: 400,
    height: 400,
    padding: { left: 5, right: 5, top: 5, bottom: 5 },

    data: [
      {
        name: "table",
        url: "/data/week3/videogames_long.csv",
        format: { type: "csv" },
        // transform: [
        //   {
        //     type: "aggregate",
        //     groupby: ["platform", "genre"],
        //     fields: ["sales_amount"],
        //     ops: ["sum"],
        //     as: ["sales_amount"],
        //   },
        // ],
      },
    ],

    scales: [
      {
        name: "xscale",
        type: "linear",
        domain: { data: "table", field: "sales_amount" },
        nice: true,
        range: "width",
      },
      {
        name: "yscale",
        type: "band",
        domain: { data: "table", field: "genre" },
        range: "height",
      },
      {
        name: "color",
        type: "ordinal",
        range: "category",
        domain: { data: "table", field: "platform" },
      },
    ],

    axes: [
      { orient: "left", scale: "yscale", zindex: 1 },
      { orient: "bottom", scale: "xscale" },
    ],

    marks: [
      {
        type: "group",
        from: {
          facet: {
            data: "table",
            name: "facet",
            groupby: "genre",
          },
        },
        encode: {
          enter: {
            y: { scale: "yscale", field: "genre" },
          },
        },
        marks: [
          {
            name: "bars",
            from: { data: "facet" },
            type: "rect",
            encode: {
              enter: {
                // y: { scale: "band", field: "platform" },
                height: { scale: "yscale", band: 1 },
                x: { scale: "xscale", field: "sales_amount" },
                x2: { scale: "xscale", value: 0 },
                fill: { scale: "color", field: "platform" },
              },
            },
          },
        ],
      },
    ],
    autosize: "pad",
  },
});

export default W3Visualization1;
