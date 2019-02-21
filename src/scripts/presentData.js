import * as d3 from "d3";
import colours from "./colours.js";

function presentData(data, id) {
  const infoElement = document.getElementById("info");
  const stripeHeight = 400;
  const stripeWidth = 100 / data.length;
  const annualAverages = data.map(year => year.Annual);
  const mapToColour = d3
    .scaleLinear()
    .domain([d3.min(annualAverages), d3.max(annualAverages)])
    .range([0, colours.length - 1]);

  d3.select(id)
    .append("svg")
    .attr("height", stripeHeight)
    .attr("width", "100%")
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("height", stripeHeight)
    .attr("width", stripeWidth + "%")
    .attr("y", 0)
    .attr("x", (data, index) => index * stripeWidth + "%")
    .style("fill", data => colours[Math.round(mapToColour(data.Annual))])
    .on("mouseover", data => {
      infoElement.innerText = "Year: " + data.Year;
    })
    .on("mouseleave", () => {
      infoElement.innerText = "Hover over a stripe to see the year.";
    });
}

export default presentData;
