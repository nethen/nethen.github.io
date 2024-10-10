import { group } from "console";
import { createClassFromSpec } from "react-vega";

export const W3Visualization4 = createClassFromSpec({
  mode: "vega-lite",
  spec: {
    padding: 5,

    data: {
      url: "/data/week3/videogames_long.csv",
      format: { type: "csv" },
    },

    hconcat: [
      {
        width: 400,
        height: 400,
        layer: [
          {
            transform: [
              {
                aggregate: [
                  { op: "mean", field: "global_sales", as: "global_sales" },
                ],
                groupby: ["publisher", "genre", "year", "name"],
              },
              {
                window: [{ op: "rank", as: "rank" }],
                sort: [{ field: "global_sales", order: "descending" }],
              },
              {
                filter: "datum.rank <= 100",
              },
            ],
            mark: { type: "circle" },
            encoding: {
              y: {
                field: "genre",
                type: "nominal",
                title: "Genre",
              },
              x: {
                field: "year",
                scale: {
                  type: "time",
                },
                title: "Year",
              },
              size: {
                field: "global_sales",
                type: "quantitative",
                title: "Global Sales (millions)",
              },

              color: {
                title: "Publisher",
                field: "publisher",
                sort: { op: "sum", field: "global_sales", order: "descending" },
                scale: {
                  scheme: "category20",
                },
              },
              opacity: {
                condition: {
                  param: "hover",
                  value: 1,
                },
                value: 0.1,
              },

              tooltip: [
                { field: "name", title: "Game", type: "nominal" },
                { field: "publisher", title: "Publisher", type: "nominal" },
              ],
            },
          },
        ],
      },
      {
        width: 300,
        height: 400,
        params: [
          {
            name: "hover",
            select: {
              type: "point",
              fields: ["publisher"],
              on: "mouseover",
              clear: "mouseout",
            },
          },
        ],
        layer: [
          {
            transform: [
              {
                aggregate: [
                  { op: "mean", field: "global_sales", as: "global_sales" },
                ],
                groupby: ["publisher", "genre", "year", "name"],
              },
              {
                window: [{ op: "rank", as: "rank" }],
                sort: [{ field: "global_sales", order: "descending" }],
              },
              {
                filter: "datum.rank <= 100",
              },
            ],
            mark: { type: "arc" },
            encoding: {
              theta: {
                field: "global_sales",
                type: "quantitative",
                title: "Global Sales (millions)",
                aggregate: "sum",
                // stack: true,
                stack: "normalize",
              },

              color: {
                title: "Publisher",
                field: "publisher",
                sort: { op: "sum", field: "global_sales", order: "descending" },
              },
              opacity: {
                condition: { param: "hover", value: 1 }, // 1
                value: 0.5,
              },
              tooltip: [
                { field: "publisher", title: "Publisher", type: "nominal" },
                {
                  field: "global_sales",
                  title: "Global Sales (millions)",
                  type: "quantitative",
                  aggregate: "sum",
                },
              ],
            },
          },
        ],
      },
    ],
  },
});

export default W3Visualization4;
