import React, { FC } from "react";
import "./ShowWeather.scss";
import InfoDay from "./miniInf/InfoDay";
import LeftInf from './leftInf/LeftInf'
export type timeFS = {
  time: string;
  img: string;
  temp: string;
    humidity: string
};
type arrTForDay = {
  name: string;
  timeTwo: Array<timeFS>;
};
const ShowWeather: FC = () => {
  const arrFull: Array<arrTForDay> = [
    {
      name: "ночь",
      timeTwo: [
        {
          time: "0: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+10 C",
            humidity: '50%'
        },
        {
          time: "3: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+7 C",
            humidity: '50%'
        },
      ],
    },
    {
      name: "утро",
      timeTwo: [
        {
          time: "06: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+10 C",
            humidity: '50%'
        },
        {
          time: "09: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+7 C",
            humidity: '50%'
        },
      ],
    },
    {
      name: "день",
      timeTwo: [
        {
          time: "12: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+10 C",
            humidity: '50%'
        },
        {
          time: "15: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+7 C",
            humidity: '50%'
        },
      ],
    },
    {
      name: "вечер",
      timeTwo: [
        {
          time: "18: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+10 C",
            humidity: '50%'
        },
        {
          time: "21: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+7 C",
            humidity: '50%'
        },
      ],
    },
  ];
  let infDay = arrFull.map(({ name, timeTwo }) => {
    return <InfoDay name={name} timeTwo={timeTwo} />;
  });
  return (
    <div className={"main-weather"}>
        <LeftInf />
      <div>{infDay}</div>
    </div>
  );
};

export default ShowWeather;
