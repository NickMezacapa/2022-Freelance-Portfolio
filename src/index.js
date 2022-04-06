import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
const ReactRoot = ReactDOMClient.createRoot(root);

ReactRoot.render(<App />);
