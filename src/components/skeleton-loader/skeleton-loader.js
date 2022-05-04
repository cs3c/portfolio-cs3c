import "./skeleton-loader.css";
import React, { Fragment } from "react";

export class Skeleton extends React.Component {
  props = { width: 0, height: 0, circle: false };
  state = null;

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let w = this.props.width;
    let h = this.props.height;
    let c = this.props.circle;

    return this.skeletonLoader(w, h, c);
  }

  skeletonLoader(width, height, circle) {
    var borderRadius = 0;
    if (circle) borderRadius = width;

    return (
      <Fragment>
        <div
          style={{ width: width, height: height, borderRadius: borderRadius }}
          className="skeleton-loader"
        ></div>
      </Fragment>
    );
  }
}
