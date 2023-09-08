import React from "react";
import { MainCard, MainBody, MainImg } from "./cardElement";

const Card = ({ children, onClick }) => {
  return (
    <div className="mainCard">
      {" "}
      <MainCard onClick={onClick}>
        <MainImg />
        <MainBody>{children}</MainBody>
      </MainCard>{" "}
    </div>
  );
};

export default Card;
