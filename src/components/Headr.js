import React from "react";
import { Link } from "react-router-dom";

const Headr = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li className="list">
            <Link to="/">random cat</Link>
          </li>
          <li>
            <Link to="/listofbreads">list of breeds</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Headr;
