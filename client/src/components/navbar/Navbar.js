import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
              }}
              className=" brand-logo center black-text"
            >
              HOME
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
