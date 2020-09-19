import React, {FC} from "react";
import './App.scss'
import TopBar from "./topbar/TopBur";
import MainWeather from "./widgetWeather/MainWeather";

const App: FC = () => {
  return (
    <div className="App">
        <TopBar />
        <MainWeather />
    </div>
  );
};

export default App;
