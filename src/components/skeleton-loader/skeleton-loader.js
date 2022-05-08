import "./skeleton-loader.css";
import React from "react";

export class Skeleton extends React.Component {
  props = { width: 0, height: 0, margin: 0, circle: false };
  state = null;

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let w = this.props.width;
    let h = this.props.height;
    let m = this.props.margin;
    let c = this.props.circle;

    return this.skeletonLoader(w, h, m, c);
  }

  skeletonLoader(width, height, margin, circle) {
    var borderRadius = 0;
    if (circle) borderRadius = width;

    return (
      <span>
        <div
          style={{
            width: width,
            height: height,
            margin: margin,
            borderRadius: borderRadius
          }}
          className="skeleton-loader"
        ></div>
      </span>
    );
  }
}
