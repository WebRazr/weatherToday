import React, { FC } from "react";
import "./MiniInfo.scss";
import { timeFS } from "../ShowWeather";
interface typeMiniInf {
  arr: timeFS;
}
const MiniInfo: FC<typeMiniInf> = ({ arr: { img, temp, time, humidity } }) => {
  let imgW = "";
  if (img === "--") {
    imgW = "04n";
  } else {
    imgW = img;
  }
  let tempW: string = "+1";
  if (temp > 0) {
    tempW = `+${temp}`;
  } else {
    tempW = `${temp}`;
  }

  return (
    <>
      <div className={"into-block"}>
        <div className={"img-time"}>
          <div className={"time-w"}>
            <p>{time}</p>
          </div>
          <div className={"img-w"}>
            <img
              height="40"
              src={`https://openweathermap.org/img/wn/${imgW}@2x.png`}
              alt="day, weather"
            />
          </div>
        </div>
        <div className={"tempBlock"}>
          <p>{tempW}&deg;C</p>
        </div>
      </div>
      <div className={"humidity-style"}>
        <p>влажность: {humidity} %</p>
      </div>
    </>
  );
};

export default MiniInfo;
