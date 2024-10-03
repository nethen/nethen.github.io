import { createClassFromSpec } from "react-vega";

export const W3Visualization4 = createClassFromSpec({
  mode: "vega-lite",
  spec: {
    padding: 5,

    data: {
      url: "/data/week3/videogames_long.csv",
      format: { type: "csv" },
    },

    layer: [
      {
        params: [
          {
            name: "select",
            select: {
              type: "point",
              // encodings: ["color"],
              fields: ["publisher_group"],
              on: "mouseover",
              clear: "mouseout",
            },
          },
        ],

        transform: [
          {
            aggregate: [
              { op: "sum", field: "sales_amount", as: "sales_amount" },
            ],
            groupby: ["publisher"],
          },
          {
            window: [{ op: "rank", as: "rank" }],
            sort: [{ field: "sales_amount", order: "descending" }],
          },
          {
            calculate: "datum.rank <= 10 ? datum.publisher : 'Others'",
            as: "publisher_group",
          },
          {
            aggregate: [
              { op: "sum", field: "sales_amount", as: "sales_amount" },
            ],
            groupby: ["publisher_group"],
          },
        ],
        mark: { type: "arc", tooltip: true },
        encoding: {
          theta: {
            field: "sales_amount",
            type: "quantitative",
            stack: "normalize",
            title: "Market Share",
          },
          color: {
            field: "publisher_group",
            type: "nominal",
            scale: {
              scheme: "category20",
            },
            title: "Publisher",
          },
          opacity: {
            condition: {
              param: "select",
              value: 1,
            },
            value: 0.5,
          },
        },
      },
    ],

    // hconcat: [
    //   {
    //     transform: [
    //       {
    //         fold: ["na_sales", "eu_sales", "jp_sales", "other_Sales"],
    //       },
    //     ],
    //     mark: "bar",
    //     encoding: {
    //       x: {
    //         field: "sales_amount",
    //         type: "quantitative",
    //         aggregate: "sum",
    //       },
    //       y: { field: "name", type: "nominal", sort: "-x" },
    //       color: {
    //         field: "publisher",
    //       },
    //     },
    //   },
    //   {
    //     params: [
    //       {
    //         name: "select",
    //         select: {
    //           type: "point",
    //           // encodings: ["color"],
    //           fields: ["publisher_group"],
    //           on: "mouseover",
    //           clear: "mouseout",
    //         },
    //       },
    //     ],

    //     transform: [
    //       {
    //         aggregate: [
    //           { op: "sum", field: "sales_amount", as: "sales_amount" },
    //         ],
    //         groupby: ["publisher"],
    //       },
    //       {
    //         window: [{ op: "rank", as: "rank" }],
    //         sort: [{ field: "sales_amount", order: "descending" }],
    //       },
    //       {
    //         calculate: "datum.rank <= 10 ? datum.publisher : 'Others'",
    //         as: "publisher_group",
    //       },
    //       {
    //         aggregate: [
    //           { op: "sum", field: "sales_amount", as: "sales_amount" },
    //         ],
    //         groupby: ["publisher_group"],
    //       },
    //     ],
    //     mark: { type: "arc", tooltip: true },
    //     encoding: {
    //       theta: {
    //         field: "sales_amount",
    //         type: "quantitative",
    //         stack: "normalize",
    //       },
    //       color: {
    //         field: "publisher_group",
    //         type: "nominal",
    //         scale: {
    //           scheme: "category20",
    //         },
    //       },
    //       opacity: {
    //         condition: {
    //           param: "select",
    //           value: 1,
    //         },
    //         value: 0.5,
    //       },
    //     },
    //   },
    // ],
  },
});

export default W3Visualization4;
