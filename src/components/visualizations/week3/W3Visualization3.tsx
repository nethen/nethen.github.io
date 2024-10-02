import { useEventListener, useIsClient, useWindowSize } from "usehooks-ts";
import { createClassFromSpec, Vega, VegaLite } from "react-vega";
// import * as dt from "@/data/week3/videogames_long.csv";
import { VisualizationSpec } from "react-vega";
import vg from "vega";
import { useState } from "react";

export const W3Visualization3 = createClassFromSpec({
  spec: {
    // $schema: "https://vega.github.io/schema/vega/v5.json",
    width: 400,
    height: 400,
    padding: 5,

    data: [
      {
        name: "table",
        url: "/data/week3/videogames_long.csv",
        // url: "/data/week3/test.csv",
        format: { type: "csv" },
        transform: [
          {
            type: "aggregate",
            groupby: ["name"],
            // fields: ["sales_amount"],
            // ops: ["sum"],
            // as: ["sales_amount"],
          },
        ],
      },
    ],

    scales: [
      {
        name: "yscale",
        type: "band",
        domain: { data: "table", field: "platform" },
        range: "height",
        // padding: 0.2,
      },
      {
        name: "xscale",
        type: "linear",
        domain: { data: "table", field: "sales_amount" },
        range: "width",
        nice: true,
      },
      {
        name: "color",
        type: "ordinal",
        domain: { data: "table", field: "sales_region" },
        range: "category",
      },
    ],

    axes: [
      { orient: "left", scale: "yscale", zindex: 1, labelPadding: 4 },
      { orient: "bottom", scale: "xscale" },
    ],

    marks: [
      {
        type: "group",
        from: {
          facet: {
            data: "table",
            name: "facet",
            groupby: "platform",
          },
        },
        encode: {
          enter: {
            y: { scale: "yscale", field: "platform" },
          },
        },
        signals: [{ name: "height", update: "bandwidth('yscale')" }],
        scales: [
          {
            name: "pos",
            type: "band",
            range: "height",
            domain: { data: "facet", field: "sales_region" },
          },
        ],
        marks: [
          {
            name: "bars",
            from: { data: "facet" },
            type: "rect",
            encode: {
              enter: {
                y: { scale: "pos", field: "sales_region" },
                height: { scale: "pos", band: 1 },
                x: { scale: "xscale", field: "sales_amount" },
                x2: { scale: "xscale", value: 0 },
                fill: { scale: "color", field: "sales_region" },
              },
            },
          },
        ],
      },
    ],
    autosize: "pad",
  },
});

export default W3Visualization3;
