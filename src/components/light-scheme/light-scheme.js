import "./light-scheme.css";
import React from "react";
import $ from "jquery";
import { BsSunFill } from "react-icons/bs";
import { MdNightsStay } from "react-icons/md";

export class LightScheme extends React.Component {
  fgLightMode = (
    <span id="light-scheme">
      <a id="light-mode" href="#light" onClick={this.changeLightMode}>
        <BsSunFill />
      </a>
      <a id="dark-mode" href="#dark" onClick={this.changeLightMode}>
        <MdNightsStay />
      </a>
    </span>
  );

  changeLightMode() {
    $("body").toggleClass("light");

    if ($("body").hasClass("light")) {
      $("#light-mode").hide();
      $("#dark-mode").show();
    } else {
      $("#light-mode").show();
      $("#dark-mode").hide();
    }

    $("body").css("opacity", "0");
    $("body").fadeTo(300, 1);
  }

  componentDidMount() {
    if ($("body").hasClass("light")) {
      $("#light-mode").hide();
      $("#dark-mode").show();
    } else {
      $("#light-mode").show();
      $("#dark-mode").hide();
    }
  }

  render() {
    return this.fgLightMode;
  }
}
