import React, { FC } from "react";
import TopWeather from "./topW/TopWeather";
import ShowWeather from "./showW/ShowWeather";

const MainWeather: FC = () => {
  return (
    <div style={{
        width: "800px",
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center'
    }}>
      <TopWeather />
      <ShowWeather />
    </div>
  );
};

export default MainWeather;
