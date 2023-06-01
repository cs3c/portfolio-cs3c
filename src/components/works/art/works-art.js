import "./works-art.css";
import React from "react";
import Gallery from "react-photo-gallery";
import { Skeleton } from "../../skeleton-loader/skeleton-loader";

export class WorksArt extends React.Component {
  props = { direction: "column", numColumns: 2 };
  state = { isLoading: true };
  works = [
    {
      src: "https://i.ibb.co/w793WTX/example-03.gif",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/k94tnWN/example-03.gif",
      width: 4,
      height: 7
    },
    {
      src: "https://i.ibb.co/QQ46QG5/example-01.gif",
      width: 5,
      height: 4
    }
  ];

  constructor(props) {
    super(props);
    this.props = props;
  }

  worksGallery = (
    <Gallery
      photos={this.works}
      direction={this.props.direction}
      columns={this.props.numColumns}
    />
  );

  loaders = (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Skeleton width="50vh" height="30vh" margin="0.5vh" />
      <Skeleton width="50vh" height="30vh" margin="0.5vh" />
      <Skeleton width="50vh" height="45vh" margin="0.5vh" />
      <Skeleton width="50vh" height="35vh" margin="0.5vh" />
    </div>
  );

  componentDidMount() {}

  render() {
    // if (this.state.isLoading) return this.loaders;
    return this.worksGallery;
  }
}
