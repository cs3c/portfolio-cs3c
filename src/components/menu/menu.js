import "./menu.css";
import React from "react";

export class Menu extends React.Component {
  props = null;
  state = null;

  render() {
    return this.mainMenu();
  }

  mainMenu() {
    return (
      <div
        style={{
          marginRight: "50px",
          textAlign: "justify"
        }}
      >
        <h5
          className="hoverable"
          style={{ marginLeft: "1px", marginBlockStart: "15px" }}
        >
          <span style={{ writingMode: "horizontal-tb" }}>4</span> ~= games stuff
        </h5>
        <h5
          className="hoverable"
          style={{ marginLeft: "1px", marginBlockStart: "15px" }}
        >
          <span style={{ writingMode: "horizontal-tb" }}>3</span> ~= commercial
        </h5>
        <h5
          className="hoverable"
          style={{ marginLeft: "1px", marginBlockStart: "15px" }}
        >
          <span style={{ writingMode: "horizontal-tb" }}>2</span> ~= 2d/3d art
        </h5>
        <h5
          class="hoverable"
          style={{ marginLeft: "1px", marginBlockStart: "15px" }}
        >
          <span style={{ writingMode: "horizontal-tb" }}>1</span> ~= audiovisual
        </h5>
      </div>
    );
  }
}
