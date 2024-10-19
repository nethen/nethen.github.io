import * as d3 from "d3";
import { useEffect, useState } from "react";
import { useFetchData } from "@/components/visualizations/d3/useFetchData";
import { AnimatePresence, motion } from "framer-motion";

export const D3Test = () => {
  const [data, setData] = useState<any>();

  const [size, setSize] = useState({ width: 640, height: 400 });
  const [margin, setMargin] = useState({
    top: 40,
    left: 40,
    right: 40,
    bottom: 20,
  });

  const [scales, setScales] = useState<any>();

  useEffect(() => {
    const fetchedData = useFetchData("/data/week3/videogames_wide.csv")
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    // console.log(data);
    if (data != undefined) {
      // console.log(size);
      const maxGlobalSales = Number(
        d3.max(data, (d: any) => parseFloat(d.Global_Sales))
      );
      const maxJPSales = Number(
        d3.max(data, (d: any) => parseFloat(d.JP_Sales))
      );
      const xScale = d3
        .scaleLinear()
        .domain([0, maxGlobalSales])
        .range([margin.left, size.width - margin.right]);
      const yScale = d3
        .scaleLinear()
        .domain([0, maxJPSales])
        .range([size.height - margin.bottom, margin.top]); //reverse order to account for svg coordinates
      setScales({ xScale, yScale });
      // console.log(maxGlobalSales);
      // console.log(maxJPSales);
    }
  }, [data]);

  return (
    <div id="chart">
      <motion.svg
        width={size.width}
        height={size.height}
        style={{ border: "1px solid black" }}
      >
        <AnimatePresence>
          {data && scales ? (
            data.map((d: any, i: number) => (
              <motion.circle
                initial={{
                  cx: size.width / 2,
                  cy: size.height / 2,
                  r: 2,
                  scale: 1,
                  fill: "blue",
                }}
                animate={{
                  cx: scales.xScale(d.Global_Sales),
                  cy: scales.yScale(d.JP_Sales),
                  scale: 10,
                  fill: d.Publisher === "Nintendo" ? "red" : "blue",
                }}
                exit={{
                  cx: size.width / 2,
                  cy: size.height / 2,
                  scale: 1,
                  fill: "blue",
                }}
                key={`point--${i}`}
              />
            ))
          ) : (
            <motion.circle
              initial={{
                cx: size.width / 2,
                cy: size.height / 2,
                r: 2,
                scale: 1,
                fill: "blue",
                opacity: 0,
              }}
              animate={{
                cx: size.width / 2,
                cy: size.height / 2,
                opacity: 1,
                fill: "blue",
                scale: 10,
              }}
              exit={{
                cx: size.width / 2,
                cy: size.height / 2,
                scale: 1,
                opacity: 0,
              }}
              key="point-initial"
            />
          )}
        </AnimatePresence>
      </motion.svg>
    </div>
  );
};

export default D3Test;

// d3.select("#chart").html(""); // reset

// console.log(dataset);

// const maxGlobalSales = Number(d3.max(data, (d: any) => d.Global_Sales));
// const maxJPSales = Number(d3.max(data, (d: any) => d.JP_Sales));
// const xScale = d3
//   .scaleLinear()
//   .domain([0, maxGlobalSales])
//   .range([margin.left, width - margin.right]);
// const yScale = d3
//   .scaleLinear()
//   .domain([0, maxJPSales])
//   .range([height - margin.bottom, margin.top]); //reverse order to account for svg coordinates

// const colorScale = d3
//   .scaleLinear()
//   .domain([0, maxGlobalSales as number])
//   .range(["green", "red"]);

// svg
//   .selectAll("circle")
//   .data(data)
//   .join("circle")
//   .attr("cx", (d: any) => xScale(d.Global_Sales))
//   .attr("cy", (d: any) => yScale(d.JP_Sales))
//   .attr("r", 10)
//   .attr("fill", (d: any) => colorScale(d.Global_Sales));

// // add axes
// svg
//   .append("g")
//   .call(d3.axisBottom(xScale).tickSize(4))
//   .attr("transform", `translate(0, ${height - margin.bottom})`);
// svg
//   .append("g")
//   .call(d3.axisLeft(yScale).tickSize(4))
//   .attr("transform", `translate(${margin.left}, 0)`);
