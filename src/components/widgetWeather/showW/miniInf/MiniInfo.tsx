import React, { FC } from "react";
import "./MiniInfo.scss";
import { timeFS } from "../ShowWeather";
interface typeMiniInf {
  arr: timeFS;
}
const MiniInfo: FC<typeMiniInf> = ({ arr: { img, temp, time,humidity } }) => {
  return(
    <>
        <div className={"into-block"}>
            <div className={"img-time"}>
                <div className={"time-w"}>
                    <p>{time}</p>
                </div>
                <div className={"img-w"}>
                    <img
                        height="40"
                        src={img}
                    />
                </div>
            </div>
            <div className={"tempBlock"}>
                <p>{temp}</p>
            </div>
        </div>
        <div className={'humidity-style'}><p>влажность: {humidity} </p></div>

    </>
  )
};

export default MiniInfo;
