"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App.js");
var ProductContext_1 = require("./components/ProductContext");
require("./index.css");
var rootElement = document.getElementById("root");
if (rootElement) {
  (0, client_1.createRoot)(rootElement).render(
    React.createElement(
      react_1.StrictMode,
      null,
      React.createElement(
        ProductContext_1.ProductProvider,
        null,
        React.createElement(
          react_router_dom_1.BrowserRouter,
          { basename: "/StarGaze" },
          " ",
          React.createElement(App_1.default, null)
        )
      )
    )
  );
} else {
  console.error("Root element not found!");
}
