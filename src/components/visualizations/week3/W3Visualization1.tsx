import { createClassFromSpec } from "react-vega";

export const W3Visualization1 = createClassFromSpec({
  mode: "vega-lite",
  spec: {
    padding: 5,

    data: {
      url: "/data/week3/videogames_long.csv",
      format: { type: "csv" },
    },

    hconcat: [
      {
        width: 300,
        height: 400,

        layer: [
          {
            transform: [
              {
                filter: {
                  // or: [
                  //   { param: "hover" },
                  //   {
                  //     and: [{ param: "click" }, { not: { param: "hover" } }],
                  //   },
                  // ],
                  param: "hover",
                },
              },
            ],
            mark: "bar",
            encoding: {
              x: {
                field: "sales_amount",
                type: "quantitative",
                // scale: {
                //   type: "linear",
                // },
                aggregate: "sum",
                axis: { title: "Total Sales (millions)" },
              },
              y: {
                field: "platform",
                type: "nominal",
                sort: "-x",
                axis: { title: "Platform" },
              },
              // color: {
              //   condition: {
              //     param: "hover",
              //     value: "grey",
              //     // value: "steelblue",
              //   },
              //   // value: "grey",
              //   // value: "green",
              // },
            },
          },
        ],
      },
      {
        width: 100,
        height: 400,
        layer: [
          {
            params: [
              {
                name: "hover",
                select: {
                  type: "point",
                  encodings: ["y"],
                  on: "pointerover",
                  // clear: "dblclick",
                  clear: "pointerout",
                },
              },

              {
                name: "click",
                select: {
                  type: "point",
                  encodings: ["y"],
                  on: "click",
                  clear: "dblclick",
                },
              },
            ],
            mark: { type: "bar", color: "#ddd" },
            encoding: {
              y: {
                field: "genre",
                axis: { title: "Genre" },
                sort: { field: "sales_amount", order: "descending" },
              },
              opacity: {
                condition: [
                  {
                    param: "hover",
                    value: 0.5,
                    empty: false,
                  },
                ],
                value: 0,
              },
            },
          },
          {
            mark: "bar",

            encoding: {
              x: {
                field: "sales_amount",
                type: "quantitative",
                aggregate: "sum",
                axis: { title: "Total Sales (millions)" },
              },
              y: {
                field: "genre",
                type: "nominal",
                sort: "-x",
                axis: { title: "Genre" },
              },

              color: {
                field: "genre",
                scale: {
                  scheme: "category20",
                },
              },
              fillOpacity: {
                condition: [
                  {
                    param: "hover",
                    value: 1,
                    empty: false,
                  },
                ],
                value: 0.5,
              },
            },
          },
        ],
      },
    ],
  },
});

export default W3Visualization1;
