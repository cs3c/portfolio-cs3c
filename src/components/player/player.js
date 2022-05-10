import "./player.css";
import React from "react";

export class Player extends React.Component {
  props = null;
  state = null;

  mainPlayer() {
    return (
      <div className="content-right-player">
        <div className="content-right-player--player">
          <div>
            <div className="player-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rKeWCFn5bCo?autoplay=1&loop=1&enablejsapi=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="player-info">
              <div>
                <hr />
                <h2>VII</h2>
                <h6>
                  <hr />
                  What's reality? <br />
                  Shall we see it? <br />
                  Shall we feel it? <br />
                  Shall we touch it? <br />
                  Idk... Nor I care. <br />
                  I just want to be
                  <br /> part of it
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return this.mainPlayer();
  }
}
