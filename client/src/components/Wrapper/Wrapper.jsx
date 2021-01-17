import React from "react";
import "./Wrapper.css";


const Wrap = (props) => {
  return (
    <main className="wrapper">{props.children}</main>

    );
};

export default Wrap;