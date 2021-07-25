import React from "react";

export const Color = (props) => {
  console.log(props);
  const color = {
    color: props.color,
    backgroundColor: "lime"
  };
  return <p style={color}>テキスト{props.children}</p>;
};
