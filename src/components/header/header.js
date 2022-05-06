import "./header.css";
import React, { Fragment } from "react";
import "../light-scheme/light-scheme";

export class Header extends React.Component {
  render() {
    return this.mainHeader();
  }

  mainHeader() {
    return (
      <Fragment>
        <span className="header">
          <h1 id="title">
            <a href="/">ALI</a>
            <span style={{ opacity: "30%" }}>ASAIDI</span>
            <span style={{ opacity: "30%" }} className="disappearance">
              F4FFB+++/X
            </span>
          </h1>
          <h3 id="slogan">
            <a href="#art">ART</a>
            <span style={{ opacity: "50%" }}>&</span>
            <span style={{ opacity: "30%" }}>\\\</span>
            <span id="light-scheme">
              <a id="light-mode">
                <i className="lni lni-sun"></i>
              </a>
              <a id="dark-mode">
                <i className="lni lni-night"></i>
              </a>
            </span>
            <span style={{ opacity: "30%" }} className="disappearance">
              +++/X
            </span>
            <br />
            <a href="#engineering">ENGINEERING</a>
            <span style={{ opacity: "30%" }} className="disappearance">
              35D/
            </span>
          </h3>
          <h6 id="contact">
            Get in touch at
            <a href="mailto:avcomps@protonmail.com">
              <i className="lni lni-popup contact-icon"></i>
            </a>{" "}
            ,
            <a
              href="https://youtube.com/c/AVcomps1/videos"
              style={{ marginRight: "3px" }}
            >
              <i className="lni lni-youtube contact-icon"></i>
            </a>{" "}
            &/or
            <a href="https://github.com/avcomps">
              <i className="lni lni-github-original contact-icon"></i>
            </a>
          </h6>
        </span>
        {/* {this.setState({ loaded: true })} */}
      </Fragment>
    );
  }
}
