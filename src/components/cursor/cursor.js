import "./c-cursor.css";
import React from "react";

export class RoundCursor extends React.Component {
  render() {
    return this.cursor();
  }

  cursor() {
    return (
      <div id="cc-container">
        <div class="cc-cursors" style={{ opacity: "0" }}>
          <img src="https://i.ibb.co/C6LsMHf/cc-normal.png" class="cc-normal" />
          <img src="https://i.ibb.co/02XYx1C/cc-hover.png" class="cc-hover" />
          <img
            src="https://i.ibb.co/rHcTwS3/cc-hover-play.png"
            class="cc-hover-play"
          />
        </div>
        <p class="cc-text-tip"></p>
        <audio id="sfx-hover" src="./assets/media/sfx/item_hover_1.ogg"></audio>
        <audio
          id="sfx-hover-alt"
          src="./assets/media/sfx/item_hover_1-alt.ogg"
        ></audio>
      </div>
    );
  }
}
