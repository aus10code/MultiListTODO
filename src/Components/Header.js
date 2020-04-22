import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="App">{props.title}</h1>
      <hr />
    </div>
  );
};

export default Header;
