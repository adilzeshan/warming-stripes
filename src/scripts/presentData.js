import * as d3 from "d3";
import colours from "./colours.js";

function presentData(data, id) {
  console.log(id, data);
  const stripeHeight = 400;
  const stripeWidth = 100 / data.length;

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
    .attr("x", (data, index) => index * stripeWidth + "%");
}

export default presentData;
