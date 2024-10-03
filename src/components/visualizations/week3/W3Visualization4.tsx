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
        width: 200,
        layer: [
          {
            transform: [
              // {
              //   aggregate: [
              //     {
              //       op: "sum",
              //       field: "sales_amount",
              //       as: "sales_amount_relative",
              //     },
              //   ],
              //   groupby: ["genre", "publisher", "sales_amount"],
              // },

              {
                filter: {
                  param: "select",
                },
              },
            ],
            mark: { type: "bar" },
            encoding: {
              x: {
                field: "sales_amount",
                type: "quantitative",
                aggregate: "sum",
              },
              y: {
                field: "genre",
                sort: "-x",
              },

              color: {
                condition: {
                  param: "select",
                  field: "publisher",
                  scale: {
                    scheme: "category20",
                    domain: [
                      "Activision",
                      "Electronic Arts",
                      "Konami Digital Entertainment",
                      "Namco Bandai Games",
                      "Nintendo",
                      "Others",
                      "Sega",
                      "Sony Computer Entertainment",
                      "THQ",
                      "Take-Two Interactive",
                      "Ubisoft",
                    ],
                  },
                  empty: false,
                },
                value: "grey",
              },
            },
          },
        ],
      },
      {
        width: 200,
        params: [
          {
            name: "select",
            select: {
              type: "point",
              // encodings: ["color"],
              fields: ["publisher"],
              on: "mouseover",
              clear: "mouseout",
            },
          },
        ],

        transform: [
          // {
          //   joinaggregate: [
          //     { op: "sum", field: "sales_amount", as: "sales_amount_total" },
          //   ],
          // },
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
            as: "publisher",
          },
          {
            aggregate: [
              { op: "sum", field: "sales_amount", as: "sales_amount" },
            ],
            groupby: ["publisher"],
          },
          {
            joinaggregate: [
              { op: "sum", field: "sales_amount", as: "sales_amount_total" },
            ],
          },
          {
            calculate:
              "round(datum.sales_amount / datum.sales_amount_total * 10000) / 100",
            as: "sales_amount_relative",
          },
        ],
        mark: { type: "arc" },
        encoding: {
          theta: {
            field: "sales_amount",
            type: "quantitative",
            stack: "normalize",
            title: "Market Share",
          },
          color: {
            field: "publisher",
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
          tooltip: [
            {
              field: "publisher",
              title: "Publisher",
              type: "nominal",
            },
            {
              field: "sales_amount_relative",
              title: "Market Share (%)",
              type: "quantitative",
            },
          ],
        },
      },
    ],
  },
});

export default W3Visualization4;
