import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { dataDay } from "./../../data/dataDay";

import "./TopWeather.scss";
import ShowW from "./inWeatherTop";
type typeTopW = {
  createDataDay: any;
  dataDays: any;
};

const TopWeather: FC<typeTopW> = ({ createDataDay, dataDays }) => {
  const [goDate, setGoDate] = useState<any>("");
  const setTime = () => {
    let nowDate: any = new Date();
    let year: number = nowDate.getFullYear();

    let day = nowDate.getDate() + "";

    const setDataDayNow = (num: string) => {
      if (num.length === 1) {
        return "0" + num;
      } else {
        return num;
      }
    };
    let month = nowDate.getMonth() + 1;
    let hours = nowDate.getHours() + "";
    let minute = nowDate.getMinutes() + "";
    let sec = nowDate.getSeconds() + "";
    return `${setDataDayNow(day)}.${month}.${year} ${hours}:${setDataDayNow(
      minute
    )}:${setDataDayNow(sec)}`;
  };
  useEffect(() => {
    dataDay().then((data) => createDataDay(data));
    setInterval(() => {
      setGoDate(setTime());
    }, 1000);
  }, []);

  // console.log(new Date());
  const showW = dataDays.arrTopW.map((el: any, idx: number) => {
    return <ShowW key={idx} el={el} />;
  });
  return (
    <div>
      <div className={"pStyleCityTime"}>
        <span className={"styleCity"}>{dataDays.cityName}</span> &nbsp;&nbsp;
        <span className={"styleTime"}>{goDate}</span>
      </div>
      <div className={"container-w"}>{showW}</div>
    </div>
  );
};

function mapStateToProps(state: any) {
  return { dataDays: state };
}
function mapDispatchToProps(dispatch: any) {
  return {
    createDataDay: (data: any) => dispatch({ type: "CREATE_DATE", data: data }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TopWeather);
