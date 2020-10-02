import React, { FC } from "react";
import "./Language.scss";

const Language: FC = () => {
  return (
    <div className={"lang-style"}>
      <a href={"/"}>рус</a>
      <a href={"/"}>eng</a>
    </div>
  );
};

export default Language;
