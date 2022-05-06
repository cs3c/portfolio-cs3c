import "./footer.css";
import React from "react";

export class Footer extends React.Component {
  render() {
    return this.mainFooter();
  }

  mainFooter() {
    return (
      <footer>
        <img
          width="100px"
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Parental_Advisory_label.svg"
          alt="Parental Advisory: Explicit Content"
        />
        <img
          width="50px"
          style={{ marginLeft: "10px" }}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/774c14d7-308c-4108-aadd-487ec52dbf3d/d58vitj-c2d7ad24-4e5f-4e2a-ada6-92f67895f6f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NGMxNGQ3LTMwOGMtNDEwOC1hYWRkLTQ4N2VjNTJkYmYzZFwvZDU4dml0ai1jMmQ3YWQyNC00ZTVmLTRlMmEtYWRhNi05MmY2Nzg5NWY2ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TZsbBepkmpSp__XpzZXUGR6t-e_mZr9o5hyVeWtOCN8"
          alt="Meme"
        />
        <p>MIT License @ 2022.</p>
        <hr />
        <p id="footnote">
          Made thanks to the powerfulness & endless possibilities of
          <span>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <i className="lni lni-react"></i> REACTJS
            </a>
          </span>
        </p>
      </footer>
    );
  }
}
