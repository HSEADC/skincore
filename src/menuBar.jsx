import "./menuBar.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";

import S_Header from "./components/S_Header/S_Header.jsx";
import { homeURL, menu } from "./menubar-data.js";

console.clear();

function getSearchRequest() {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  if (searchParams.has("request")) {
    return searchParams.get("request");
  } else {
    return "";
  }
}

const props = {
  homeURL,
  menu,
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".S_Header").remove();

  const menubar = document.createElement("div");
  menubar.classList.add("S_Header");
  document.body.prepend(menubar);

  const root = createRoot(menubar);
  root.render(<S_Header searchInputValue={getSearchRequest()} {...props} />);
});