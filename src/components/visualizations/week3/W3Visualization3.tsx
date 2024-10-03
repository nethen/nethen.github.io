import { createClassFromSpec } from "react-vega";

export const W3Visualization3 = createClassFromSpec({
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
                  or: [
                    { param: "hover" },
                    // {
                    //   param: "click",
                    // },
                  ],
                  // param: "hover",
                },
              },
            ],
            mark: "bar",
            encoding: {
              x: {
                field: "sales_amount",
                type: "quantitative",
                aggregate: "sum",
                axis: { title: "Total Sales (millions)" },
                // scale: {
                //   type: "linear",
                // },
              },
              y: {
                field: "platform",
                type: "nominal",
                sort: "-x",
                axis: { title: "Platform" },
              },
              color: {
                condition: {
                  param: "hover",
                  field: "sales_region",
                  empty: false,
                },
                value: "grey",
              },
              opacity: {
                condition: [
                  {
                    param: "hover",
                    value: 1,
                    empty: false,
                  },
                ],
                value: 0.5,
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
          // {
          //   mark: "bar",
          //   encoding: {
          //     x: {
          //       field: "sales_amount",
          //       type: "quantitative",
          //       aggregate: "sum",
          //       axis: { title: "Total Sales (millions)" },
          //     },
          //     y: {
          //       field: "platform",
          //       type: "nominal",
          //       sort: "-x",
          //       axis: { title: "Platform" },
          //     },

          //     opacity: {
          //       condition: [
          //         {
          //           param: "hover",
          //           value: 0,
          //           empty: false,
          //         },
          //       ],
          //       value: 1,
          //     },
          //   },
          // },
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
                  encodings: ["y", "color"],
                  on: "pointerover",
                  // clear: "dblclick",
                  clear: "pointerout",
                },
              },

              {
                name: "click",
                select: {
                  type: "point",
                  encodings: ["y", "color"],
                  on: "click",
                  clear: "dblclick",
                },
              },
            ],
            mark: { type: "bar", color: "#ddd" },
            encoding: {
              y: {
                field: "sales_region",
                axis: { title: "Region" },
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
                scale: {
                  zero: true,
                },
              },
              y: {
                field: "sales_region",
                type: "nominal",
                sort: "-x",
                axis: { title: "Region" },
              },

              color: {
                condition: {
                  param: "hover",
                  field: "sales_region",
                  scale: {
                    domain: ["na_sales", "eu_sales", "jp_sales", "other_sales"],
                    // range: ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4"],
                  },
                },
                value: "grey",
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

export default W3Visualization3;
