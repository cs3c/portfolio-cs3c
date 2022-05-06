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
    return (
      <div id="main-menu">
        <div className="main-menu-item hoverable">
          <p>1</p>
          {/* <div>
            <h5>games stuff</h5>
          </div> */}
        </div>
        <div className="main-menu-item hoverable">
          <p>2</p>
          {/* <div>
            <h5>commercial</h5>
          </div> */}
        </div>
        <div className="main-menu-item hoverable">
          <p>3</p>
          {/* <div>
            <h5>2d/3d art</h5>
          </div> */}
        </div>
        <div className="main-menu-item hoverable">
          <p>4</p>
          {/* <div>
            <h5>audiovisual</h5>
          </div> */}
        </div>
      </div>
    );
  }
}
