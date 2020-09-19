import React, { FC } from "react";
import {timeFS} from "../ShowWeather";

interface typeInfDay {
    name: string,
    timeTwo: Array<timeFS>
}
const LeftInf: FC = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column' }}>
            <p>температура: 10</p>
            <p>ощущение: 10</p>
            <p>направление ветра: 10</p>
            <p>Скорость ветра: 10</p>
            <p>облака: 10</p>
            <p>Влажность: 10</p>
            <p>давление: 10</p>
    </div>)

};

export default LeftInf;
