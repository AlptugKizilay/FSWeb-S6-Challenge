// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import "./App.css";

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
