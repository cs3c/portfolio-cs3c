import "./view-browser.css";
import React from "react";
import { BrowserView } from "react-device-detect";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Footer } from "../footer/footer";
import { Works } from "../works/works";
// import { Player } from "../works-player/works-player";
import "../cursors/c-cursor";

export default class ViewBrowser extends React.Component {
  props = null;
  state = null;

  render() {
    console.log("---------- view-browser.js ----- correct");
    return this.browser();
  }

  browser() {
    return (
      <BrowserView>
        <div id="content-left">
          <div className="softness-top"></div>
          <div id="content-left-gallery">
            <Works direction="column" numColumns="2" />
          </div>
          <div className="softness-bottom"></div>
        </div>

        <div id="content-right">
          <div className="content-right-info">
            <Header />
            <div style={{ display: "flex" }}>
              <Menu />
              <Footer />
            </div>
          </div>
          {/* <Player /> */}
        </div>
      </BrowserView>
    );
  }
}
