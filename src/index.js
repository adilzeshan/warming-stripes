require("offline-plugin/runtime").install();

import "./fonts/Cinzel-Regular.ttf";
import "./fonts/Lato-Regular.ttf";
import csvFile from "./data/land/global/GLB.Ts.csv";

import "./index.css";
import "./index.html";
import loadData from "./scripts/loadData.js";

loadData(csvFile, "#app");
