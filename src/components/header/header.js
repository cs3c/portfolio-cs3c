import "./header.css";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { ImYoutube } from "react-icons/im";
import { VscGithubInverted } from "react-icons/vsc";
import { LightScheme } from "../light-scheme/light-scheme";

export class Header extends React.Component {
  fgTitle = (
    <h1 id="header-title">
      <a href="/">Ali</a>
      <span style={{ opacity: "30%" }}>Vorobiev</span>
    </h1>
  );

  fgSlogan = (
    <h3 id="header-slogan">
      <a href="#art">PLAY</a>
      <span style={{ opacity: "50%" }}>&</span>
      <LightScheme />
      <span style={{ opacity: "30%" }} className="disappearance">
        +++/X
      </span>
      <br />
      <a href="#engineering">EXPLORE</a>
      <span style={{ opacity: "30%" }} className="disappearance">
        35D/
      </span>
    </h3>
  );

  fgContact = (
    <h6 id="header-contact">
      Get in touch at
      <a href="mailto:avcomps@protonmail.com">
        <BiMessageDetail className="contact-icon" />
      </a>{" "}
      ,
      <a
        href="https://youtube.com/c/AVcomps1/videos"
        style={{ marginRight: "3px" }}
      >
        <ImYoutube className="contact-icon" />
      </a>{" "}
      &/or
      <a href="https://github.com/cs3c">
        <VscGithubInverted className="contact-icon" />
      </a>
    </h6>
  );

  render() {
    return (
      <header id="header">
        {this.fgTitle}
        {this.fgSlogan}
        {this.fgContact}
      </header>
    );
  }
}
