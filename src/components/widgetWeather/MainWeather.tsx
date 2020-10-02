import React, { FC } from "react";
import TopWeather from "./topW/TopWeather";
import ShowWeather from "./showW/ShowWeather";
import {Route} from "react-router";

const MainWeather: FC = () => {
  return (
    <div style={{
        width: "800px",
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center'
    }}>
      <TopWeather />
        <Route path="/" exact component={ShowWeather}/>
        <Route path="/day/:num" component={ShowWeather}/>

    </div>
  );
};

export default MainWeather;
