import { useEventListener, useIsClient, useWindowSize } from "usehooks-ts";
import { createClassFromSpec, Vega, VegaLite } from "react-vega";
// import * as dt from "@/data/week3/videogames_long.csv";
import { VisualizationSpec } from "react-vega";
import vg from "vega";
import { useState } from "react";

export const W3Visualization3 = createClassFromSpec({
  mode: "vega-lite",
  spec: {
    // $schema: "https://vega.github.io/schema/vega/v5.json",
    width: 600,
    height: 600,
    padding: 5,

    data: {
      url: "/data/week3/videogames_long.csv",
      format: { type: "csv" },
    },

    params: [
      {
        name: "region",
        select: { type: "point", fields: ["sales_region"] },
        bind: "legend",
      },
    ],

    mark: "bar",
    encoding: {
      x: {
        field: "sales_amount",
        type: "quantitative",
        axis: { title: "Sales Amount" },
        aggregate: "sum",
      },
      y: {
        field: "platform",
        type: "nominal",
        axis: { title: "Platform" },
      },
      yOffset: {
        field: "sales_region",
        type: "nominal",
      },
      color: {
        field: "sales_region",
        scale: { scheme: "tableau20" },
      },
    },
    transform: [{ filter: { param: "region", field: "sales_region" } }],
  },
});

export default W3Visualization3;
