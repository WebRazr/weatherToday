import React, { FC } from "react";
import "./LeftInf.scss";

const LeftInf: FC<any> = ({ infDay }) => {
  const {
    numDay,
    nameDay,
    tempToday,
    likeTemp,
    winter,
    img,
    speedWinter,
    humidity,
    pressure,
    yearsNum,
    numMonth,
  } = infDay;
  let TempLefy = "1";
  if (tempToday > 0) {
    TempLefy = `+${tempToday}`;
  } else {
    TempLefy = `${tempToday}`;
  }
  let LikeT = "1";
  if (tempToday > 0) {
    LikeT = `+${likeTemp}`;
  } else {
    LikeT = `${likeTemp}`;
  }

  return (
    <div className={"leftInf-style"}>
      <p className={"day-style-left"}>
        {nameDay} {numDay}.{numMonth}.{yearsNum}
      </p>
      <div className={"temp-left"}>
        <img
          width={70}
          src={`https://openweathermap.org/img/wn/${img}@2x.png`}
          alt={"weather"}
        />
        <p>{TempLefy}&deg;C</p>
      </div>
      <p className={"like-temp"}>чувствуется как: {LikeT}&deg;C</p>
      <div>
        <div>
          <p>Давлен.: {pressure} hPa</p>
          <p>Скор. ветра: {Math.floor(speedWinter)} м.с</p>
        </div>
        <div>
          <p>Влажность: {humidity}%</p>
          <p>напр. ветра: {winter}&deg;</p>
        </div>
      </div>
    </div>
  );
};

export default LeftInf;
