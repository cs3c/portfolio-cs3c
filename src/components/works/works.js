import React from "react";
import Gallery from "react-photo-gallery";

export class Works extends React.Component {
  props = { direction: "column", numColumns: 2 };
  state = null;

  render() {
    return (
      <Gallery
        photos={works}
        direction={this.props.direction}
        columns={this.props.numColumns}
      />
    );
  }
}

const works = [
  {
    src: "https://i.ibb.co/QQ46QG5/example-01.gif",
    width: 4,
    height: 3
  },
  {
    src:
      "https://images.squarespace-cdn.com/content/v1/5d4b249616f93e000149aebd/1566042159770-EEFWH1OC4XMSA179D22W/CoralTrees.png?format=1000w",
    width: 5,
    height: 3
  },
  {
    src:
      "https://cdn.80.lv/api/upload/post/2972/images/5d2c68119b051/widen_1220x0.jpg",
    width: 5,
    height: 3
  },
  {
    src: "https://i.ibb.co/qMYrHdH/example-02.gif",
    width: 5,
    height: 4
  },
  {
    src: "https://i.ibb.co/k94tnWN/example-03.gif",
    width: 4,
    height: 7
  },
  {
    src:
      "https://cdnb.artstation.com/p/challenges/images/000/000/003/medium/Environment_3D_Charly_Chive.jpg?1459776030",
    width: 5,
    height: 3
  }
];
