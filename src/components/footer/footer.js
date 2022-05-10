import "./footer.css";
import React from "react";
import { FaReact } from "react-icons/fa";

export class Footer extends React.Component {
  fgFootnote = (
    <p id="footer-footnote">
      Made thanks to the endless possibilities of
      <span>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <FaReact className="footer-icon" />
          REACT
        </a>
      </span>
    </p>
  );

  fgImages = (
    <div id="footer-images">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Parental_Advisory_label.svg"
        alt="Parental Advisory: Explicit Content"
        width="100px"
      />
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/774c14d7-308c-4108-aadd-487ec52dbf3d/d58vitj-c2d7ad24-4e5f-4e2a-ada6-92f67895f6f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NGMxNGQ3LTMwOGMtNDEwOC1hYWRkLTQ4N2VjNTJkYmYzZFwvZDU4dml0ai1jMmQ3YWQyNC00ZTVmLTRlMmEtYWRhNi05MmY2Nzg5NWY2ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TZsbBepkmpSp__XpzZXUGR6t-e_mZr9o5hyVeWtOCN8"
        alt="Meme"
        width="50px"
        style={{ marginLeft: "10px" }}
      />
    </div>
  );

  render() {
    return (
      <footer id="footer">
        <section>
          {this.fgImages}
          <p>MIT License @ 2022.</p>
          <hr />
          {this.fgFootnote}
        </section>
      </footer>
    );
  }
}
