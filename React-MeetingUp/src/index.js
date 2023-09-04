import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  // BrowserRouter로 App 컴포넌트를 감싸서 Router를 사용할 수 있도록 한다.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
