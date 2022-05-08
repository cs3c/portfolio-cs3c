import "./header.css";
import React, { Fragment } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
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
                <MdWbSunny />
              </a>
              <a id="dark-mode">
                <MdNightsStay />
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
              <BiMessageDetail className="contact-icon" />
            </a>{" "}
            ,
            <a
              href="https://youtube.com/c/AVcomps1/videos"
              style={{ marginRight: "3px" }}
            >
              <BsYoutube className="contact-icon" />
            </a>{" "}
            &/or
            <a href="https://github.com/avcomps">
              <VscGithubInverted className="contact-icon" />
            </a>
          </h6>
        </span>
        {/* {this.setState({ loaded: true })} */}
      </Fragment>
    );
  }
}
