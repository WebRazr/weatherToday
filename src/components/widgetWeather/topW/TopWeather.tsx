import React, { FC } from "react";

import "./TopWeather.scss";
import ShowW from "./inWeatherTop";
const TopWeather: FC = () => {
  type testDaysWeather = {
    day: string;
    num: number;
    month: string;
    img: string;
    tMin: string;
    tMax: string;
  };
  let arrDay: Array<testDaysWeather> = [
    {
      day: "понедельник",
      img: "дощ",
      month: "сентябрь",
      num: 14,
      tMax: "+24",
      tMin: "+14",
    },
    {
      day: "вторник",
      img: "дощ",
      month: "сентябрь",
      num: 15,
      tMax: "+24",
      tMin: "+14",
    },
    {
      day: "понедельник",
      img: "дощ",
      month: "сентябрь",
      num: 14,
      tMax: "+24",
      tMin: "+14",
    },
    {
      day: "среда",
      img: "дощ",
      month: "сентябрь",
      num: 16,
      tMax: "+24",
      tMin: "+14",
    },
    {
      day: "четверг",
      img: "дощ",
      month: "сентябрь",
      num: 17,
      tMax: "+24",
      tMin: "+14",
    },
  ];
   const showW = arrDay.map((el)=>{
       return (<ShowW el ={el}/>)
   })
  return (

      <div className={"container-w"}>
          {showW}
      </div>
  );
};

export default TopWeather;
