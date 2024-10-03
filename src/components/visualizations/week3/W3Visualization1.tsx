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
            transform: [{ filter: { param: "pts" } }],
            mark: "bar",
            encoding: {
              x: {
                field: "sales_amount",
                type: "quantitative",
                aggregate: "sum",
                axis: { title: "Total Sales (millions)" },
              },
              y: {
                field: "platform",
                type: "nominal",
                sort: "-x",
                axis: { title: "Platform" },
              },
            },
          },
        ],
      },
      {
        width: 100,
        height: 400,
        mark: "bar",
        params: [
          {
            name: "pts",
            select: { type: "point", encodings: ["y"] },
          },
        ],
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
            condition: {
              param: "pts",
              value: "steelblue",
            },
            value: "grey",
          },
        },
      },
    ],
  },
});

export default W3Visualization1;
