import React, { FC } from "react";
import "./LeftInf.scss";

const LeftInf: FC = () => {
  return (
    <div className={"leftInf-style"}>
      <p className={"day-style-left"}>Понедельник 22.09.20</p>
        <div className={'temp-left'}>
            <img width={70} src={'https://www.freepngimg.com/thumb/weather/23793-9-weather-photos.png'}/>
            <p>17 C</p>
        </div>
        <p className={'like-temp'}>чувствуется как: 10</p>
        <div>
        <div>
          <p>Давление: 10</p>
            <p>Скорость ветра: 10</p>
        </div>
        <div>
          <p>Влажность: 10</p>
            <p>напр. ветра: 10</p>
        </div>
      </div>
    </div>
  );
};

export default LeftInf;
