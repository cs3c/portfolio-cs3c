import "./works.css";
import React, { Fragment } from "react";
import Gallery from "react-photo-gallery";
import { Skeleton } from "../skeleton-loader/skeleton-loader";

export class Works extends React.Component {
  props = { direction: "column", numColumns: 2 };
  state = { isLoading: true };
  works = [
    {
      src:
        "https://images.squarespace-cdn.com/content/v1/5d4b249616f93e000149aebd/1566042159770-EEFWH1OC4XMSA179D22W/CoralTrees.png?format=1000w",
      width: 5,
      height: 3
    },
    {
      src: "https://i.ibb.co/QQ46QG5/example-01.gif",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/k94tnWN/example-03.gif",
      width: 4,
      height: 7
    },
    {
      src: "https://i.ibb.co/qMYrHdH/example-02.gif",
      width: 5,
      height: 4
    },
    {
      src:
        "https://cdn.80.lv/api/upload/post/2972/images/5d2c68119b051/widen_1220x0.jpg",
      width: 5,
      height: 3
    },
    {
      src:
        "https://cdnb.artstation.com/p/challenges/images/000/000/003/medium/Environment_3D_Charly_Chive.jpg?1459776030",
      width: 5,
      height: 3
    }
  ];

  worksGallery = (
    <Fragment>
      <Gallery
        photos={this.works}
        direction={this.props.direction}
        columns={this.props.numColumns}
      />
    </Fragment>
  );

  loaders = (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Skeleton width="50vh" height="30vh" />
      <Skeleton width="50vh" height="30vh" />
      <Skeleton width="50vh" height="45vh" />
      <Skeleton width="50vh" height="35vh" />
    </div>
  );

  componentDidMount() {
    setInterval(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    if (this.state.isLoading) return this.loaders;
    else return this.worksGallery;
  }
}
