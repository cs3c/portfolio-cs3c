import "./menu.css";
import React from "react";

export class Menu extends React.Component {
  props = null;
  state = null;

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return this.mainMenu();
  }

  mainMenu() {
    return <div id="main-menu"></div>;
  }
}
