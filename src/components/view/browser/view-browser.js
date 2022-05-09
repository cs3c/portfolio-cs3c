import "./view-browser.css";
import React, { Fragment } from "react";
import $ from "jquery";
import { BrowserView } from "react-device-detect";
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import { WorksArt } from "../../works/art/works-art";
// import { WorksEng } from "../../works/engineering/works-engineering";
import { Player } from "../../player/player";
import "../../cursor/c-cursor";

export default class ViewBrowser extends React.Component {
  props = null;
  state = { showArt: true, showPlayer: false };

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return this.browser();
  }

  browser() {
    let playerElement = <Player />;
    let infoElement = (
      <div className="content-right-info">
        <Header />
        <div style={{ display: "flex" }}>
          <Footer />
        </div>
      </div>
    );

    if (!this.state.showPlayer) playerElement = <Fragment />;
    else infoElement = <Fragment />;

    return (
      <BrowserView>
        <div id="content-left">
          <div className="softness-top"></div>
          <div id="content-left-gallery">
            <WorksArt direction="column" numColumns="2" />
          </div>
          <div className="softness-bottom"></div>
        </div>

        <div id="content-right">
          {infoElement}
          {playerElement}
        </div>
      </BrowserView>
    );
  }
}
