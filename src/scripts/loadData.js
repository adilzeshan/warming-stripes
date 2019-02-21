import * as d3 from "d3";
import processData from "./processData.js";
import presentData from "./presentData.js";

function loadData(file, id) {
  d3.csv(file, processData).then(data => presentData(data, id));
}

export default loadData;
