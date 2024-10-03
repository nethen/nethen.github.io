import { createClassFromSpec } from "react-vega";

export const W3Visualization2 = createClassFromSpec({
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
                filter:
                  // or: [{ param: "click" }, { param: "brush" }],
                  { param: "brush" },
              },
            ],
            mark: "bar",
            encoding: {
              y: {
                field: "sales_amount",
                type: "quantitative",
                aggregate: "sum",
                axis: { title: "Total Sales (millions)" },
              },
              x: {
                field: "genre",
                type: "nominal",

                axis: { title: "Genre", labelAngle: -45 },
              },
            },
          },
        ],
      },
      {
        width: 300,
        height: 400,

        layer: [
          {
            transform: [
              {
                filter:
                  // or: [{ param: "click" }, { param: "brush" }],
                  { param: "brush" },
              },
            ],
            mark: "bar",
            encoding: {
              y: {
                field: "sales_amount",
                type: "quantitative",
                aggregate: "sum",
                axis: { title: "Total Sales (millions)" },
              },
              x: {
                field: "platform",
                type: "nominal",

                axis: { title: "Platform" },
              },
            },
          },
        ],
      },
      {
        width: 300,
        height: 400,
        layer: [
          // REMOVED TO REDUCE INPUT DELAY
          // {
          //   mark: { type: "bar", color: "#ddd" },
          //   params: [
          //     {
          //       name: "hover",
          //       select: {
          //         type: "point",
          //         encodings: ["x"],
          //         on: "mouseover",
          //         // clear: "mouseout",
          //       },
          //     },
          //     {
          //       name: "click",
          //       select: {
          //         type: "point",
          //         encodings: ["x"],
          //       },
          //     },
          //   ],

          //   encoding: {
          //     x: {
          //       field: "year",
          //       type: "temporal",
          //       timeUnit: "year",
          //       axis: { title: "Year" },
          //     },

          //     fillOpacity: {
          //       condition: [
          //         {
          //           param: "hover",
          //           value: 0.5,
          //           empty: false,
          //         },
          //         {
          //           param: "click",
          //           value: 0.5,
          //           empty: false,
          //         },
          //       ],
          //       value: 0,
          //     },
          //   },
          // },
          {
            mark: "bar",
            params: [
              {
                name: "brush",
                select: {
                  type: "interval",
                  encodings: ["x"],
                },
              },
            ],

            encoding: {
              y: {
                field: "sales_amount",
                type: "quantitative",
                aggregate: "sum",
                axis: { title: "Total Sales (millions)" },
              },
              x: {
                field: "year",
                type: "temporal",
                timeUnit: "year",
                axis: { title: "Year", labelAngle: 0 },
              },
              color: {
                condition: [
                  // {
                  //   param: "click",
                  //   value: "green",
                  //   empty: false,
                  // },
                  {
                    param: "brush",
                    value: "green",
                    empty: false,
                  },
                ],
                value: "steelblue",
              },
              fillOpacity: {
                condition: [
                  {
                    param: "brush",
                    value: 1,
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

export default W3Visualization2;
