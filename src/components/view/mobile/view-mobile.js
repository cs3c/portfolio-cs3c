import "./view-mobile.css";
import React from "react";
import { MobileView } from "react-device-detect";
import { Header } from "../../header/header";
import { Menu } from "../../menu/menu";
import { Footer } from "../../footer/footer";
import { WorksArt } from "../../works/art/works-art";
// import { WorksEng } from "../../works/engineering/works-engineering";

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
          <WorksArt direction="column" numColumns="1" />
        </div>
        <div className="softness-bottom"></div>
      </MobileView>
    );
  }
}
