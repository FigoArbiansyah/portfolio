import React from "react";

const Main = (props) => {
  return <div className={`${props.class}`}>{props.children}</div>;
};

export default Main;
