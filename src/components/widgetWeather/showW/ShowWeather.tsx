import React, { FC } from "react";
import "./ShowWeather.scss";
import InfoDay from "./miniInf/InfoDay";
export type timeFS = {
  time: string;
  img: string;
  temp: string;
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
        },
        {
          time: "3: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+7 C",
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
        },
        {
          time: "09: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+7 C",
        },
      ],
    },
    {
      name: "день",
      timeTwo: [
        {
          time: "06: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+10 C",
        },
        {
          time: "09: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+7 C",
        },
      ],
    },
    {
      name: "вечер",
      timeTwo: [
        {
          time: "06: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+10 C",
        },
        {
          time: "09: 00",
          img:
            "https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png",
          temp: "+7 C",
        },
      ],
    },
  ];
  let infDay = arrFull.map(({ name, timeTwo }) => {
    return <InfoDay name={name} timeTwo={timeTwo} />;
  });
  return (
    <div className={"main-weather"}>
      <div>{infDay}</div>
    </div>
  );
};

export default ShowWeather;
