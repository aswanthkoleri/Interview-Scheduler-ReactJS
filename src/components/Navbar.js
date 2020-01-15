import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/create">Create Interview</a>
        </li>
        <li>
          <a href="/list">Show All Interviews</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
