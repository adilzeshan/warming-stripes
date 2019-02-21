import * as d3 from "d3";

function presentData(data, id) {
  console.log(id, data);
  const stripeHeight = 400;

  d3.select(id)
    .append("svg")
    .attr("height", stripeHeight)
    .attr("width", "100%");
}

export default presentData;
