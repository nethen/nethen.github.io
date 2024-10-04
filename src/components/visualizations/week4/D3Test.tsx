import * as d3 from "d3";
import { useEffect } from "react";
// import { DSVRowString } from "d3";
// import { platform } from "os";

export const D3Test = () => {
  useEffect(() => {
    d3.select("#chart").html(""); // reset
    d3.select("#chart").append("p").text("Hello, worlds!");
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", 640)
      .attr("height", 480)
      .style("border", "1px solid black");

    const dataset = [
      {
        platform: "PC",
        count: 400,
      },
      {
        platform: "DS",
        count: 2152,
      },
      {
        platform: "PS3",
        count: 1331,
      },
      {
        platform: "Wii",
        count: 1320,
      },
      {
        platform: "X360",
        count: 1262,
      },
      {
        platform: "PSP",
        count: 1209,
      },
      {
        platform: "PC",
        count: 4500,
      },
      {
        platform: "AB",
        count: 150,
      },
      {
        platform: "GBA",
        count: 120,
      },
    ];

    const xScale = d3.scaleLinear().domain([0, 4500]).range([0, 640]);
    // const yScale = d3
    //   .scaleBand()
    //   .domain(dataset.map((d) => d.platform))
    //   .range([0, 480]);

    svg
      .selectAll("rect")
      .data(dataset)
      .join("rect")
      .attr("x", (d) => xScale(d.count) - 15)
      //   .attr("y", (d) => 480 - d * 4)
      .attr("width", 30)
      .attr("height", 30)
      .attr("fill", "teal");
  }, []);
  return <div id="chart"></div>;
};

export default D3Test;
