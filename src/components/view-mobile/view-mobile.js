import "./view-mobile.css";
import React from "react";
import { MobileView } from "react-device-detect";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Footer } from "../footer/footer";
import { Works } from "../works/works";

export default class ViewMobile extends React.Component {
  props = null;
  state = null;

  render() {
    // document.body.classList.add("mobile");
    return this.mobile();
  }

  mobile() {
    return (
      <MobileView>
        <div id="content-top">
          <Header />
          <div style={{ display: "flex" }}>
            <Menu />
            <Footer />
          </div>
        </div>
        <div id="content-bottom-gallery">
          <Works />
        </div>
        <div className="softness-bottom"></div>
      </MobileView>
    );
  }
}
