import React from "react";
export const Header = (props) => {
  return (
    <div>
      <h1 className="heading text-center">Photo Media Application in {props.name}</h1>
    </div>
  );
};