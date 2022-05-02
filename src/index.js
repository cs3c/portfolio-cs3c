import React from "react";
import { render } from "react-dom";
import { isBrowser, isMobile } from "react-device-detect";
import ViewBrowser from "./components/view-browser/view-browser";
import ViewMobile from "./components/view-mobile/view-mobile";

function renderApp() {
  let root = document.getElementById("app");

  if (isBrowser) {
    render(<ViewBrowser />, root);
  } else if (isMobile) {
    render(<ViewMobile />, root);
  }
}

export const App = renderApp();
