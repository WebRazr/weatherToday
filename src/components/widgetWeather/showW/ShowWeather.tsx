import React, { FC, useEffect, useState } from "react";
import "./ShowWeather.scss";
import InfoDay from "./miniInf/InfoDay";
import LeftInf from "./leftInf/LeftInf";
import { Redirect, useParams } from "react-router-dom";
import { connect } from "react-redux";
export type timeFS = {
  time: any;
  img: any;
  temp: any;
  humidity: any;
};

type typeProps = {
  dataDaysShow: any;
  findDay: any;
  dataDay: any;
};
const ShowWeather: FC<typeProps> = ({ dataDaysShow, findDay, dataDay }) => {
  const { num } = useParams();

  useEffect(() => {
    findDay(num);
  }, [num]);
  console.log("show w", dataDaysShow);
  useEffect(() => {
    if (dataDaysShow.allDays === null) {
      console.log("null");
    } else {
      dataDay();
    }
  }, [dataDaysShow.allDays]);
  ////1. redirect if num = undefined + , and if num !== allDays with array
  if (
    num === undefined ||
    num < new Date().getDate() ||
    num > new Date().getDate() + 4
  ) {
    console.log("ничего");

    return <Redirect to={`/day/${new Date().getDate()}`} />;
  }
  // if (+num === 60) {
  //   console.log(num, dataDaysShow);
  //   return <Redirect to={`/day/${new Date().getDate()}`} />;
  // }
  if (dataDaysShow.oneDayData === null) {
    return null;
  }

  let infDay = dataDaysShow.oneDayData[0].temp.map((el: any, idx: number) => {
    return <InfoDay key={idx} name={el.name} timeTwo={el.timeTwo} />;
  });

  return (
    <>
      <div className={"main-weather"}>
        <LeftInf infDay={dataDaysShow.oneDayData[0]} />
        <div>{infDay}</div>
      </div>
    </>
  );
};
function mapStateToProps(state: any) {
  return { dataDaysShow: state };
}
function mapDispatchToProps(dispatch: any) {
  return {
    findDay: (num: any) => dispatch({ type: "FIND_DAY", numDay: num }),
    dataDay: () => dispatch({ type: "DATA_DAY" }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowWeather);
