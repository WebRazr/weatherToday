import React, { FC } from "react";
import "./App.scss";
import TopBar from "./topbar/TopBur";
import MainWeather from "./widgetWeather/MainWeather";

const App: FC = () => {
  return (
    <div className="App">
      <TopBar />
      <MainWeather />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            width: "100%",
            background: '#2A0A0A' ,
            height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: 'center'
          }}
        >
        <p style={{ color: "#fff", fontSize: '0.8em' }}>copyright © Shevchenko David 2020</p>
        </div>
      </div>
    </div>
  );
};

export default App;
