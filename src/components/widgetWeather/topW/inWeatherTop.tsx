import React, { FC } from "react";
import "./TopWeather.scss";
type testDaysWeather = {
    day: string;
    num: number;
    month: string;
    img: string;
    tMin: string;
    tMax: string;
};
type arrProps = {
    el: testDaysWeather
}
const ShowW: FC<arrProps> = ({el}) => {
  return (
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
          src={
            "https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/Weather+Targeting"
          }
        />
      </div>
      <div className={"five_div"}>
        <div>
          <p className={"s-t"}>мин.</p>
          <p className={"s-tm"}>{el.tMin}</p>
        </div>
        <div>
          <p className={"s-m"}>макс.</p>
          <p className={"s-tm"}>{el.tMax}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowW;
