import React, { FC } from "react";
import "./TopWeather.scss";
import { NavLink } from "react-router-dom";

type testDaysWeather = {
  day: string;
  num: number;
  month: string;
  numMonth: any;
  img: string;
  tMin: number;
  tMax: number;
};
type arrProps = {
  el: testDaysWeather;
};
const ShowW: FC<arrProps> = ({ el }) => {
  let maxT: string = "+1";
  if (el.tMax > 0) {
    maxT = `+${el.tMax}`;
  }
  let minT: string = "+1";
  if (el.tMin > 0) {
    minT = `+${el.tMin}`;
  }
  return (
    <NavLink
      to={`/day/${el.num}`}
      className={"linkNav"}
      activeClassName={"Active-w"}
    >
      <div className={"weather-w"}>
        <div className={"one_div"}>
          <p>{el.day}</p>
        </div>
        <div className={"two_div"}>
          <p>{el.num}</p>
        </div>
        <div className={"three_div"}>
          <p>{el.month}</p>
        </div>
        <div className={"foo_div"}>
          <img
            style={{ height: "70px" }}
            src={`https://openweathermap.org/img/wn/${el.img}@2x.png`}
            alt={"weather"}
          />
        </div>
        <div className={"five_div"}>
          <div>
            <p className={"s-t"}>мин.</p>
            <p className={"s-tm"}>{minT}</p>
          </div>
          <div>
            <p className={"s-m"}>макс.</p>
            <p className={"s-tm"}>{maxT}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ShowW;
