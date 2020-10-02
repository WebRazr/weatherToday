import React, { FC } from "react";
import MiniInfo from "./MiniInfo";
import { timeFS } from "../ShowWeather";

interface typeInfDay {
  name: string;
  timeTwo: Array<timeFS>;
}
const InfoDay: FC<typeInfDay> = ({ name, timeTwo }) => {
  const miniInf = timeTwo.map((arr, idx: number) => {
    return <MiniInfo key={idx} arr={arr} />;
  });
  return (
    <div className={"miniBlock"}>
      <div className={"day-inf"}>
        <p>{name}</p>
      </div>
      {miniInf}
    </div>
  );
};

export default InfoDay;
