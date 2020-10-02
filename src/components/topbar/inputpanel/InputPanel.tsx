import React, { FC, useState } from "react";
import "./inputPanel.scss";
import { dataDay } from "../../data/dataDay";
import { connect } from "react-redux";

const InputPanel: FC<any> = ({ findCity }) => {
  let [cityName, setCityName] = useState("");
  let [errorF, setErrorF] = useState(false);
  const findCityBTN = () => {
    dataDay(cityName)
      .then((data) => findCity(data, cityName))
      .catch(() => {
        setErrorF(true);
        setTimeout(() => {
          setErrorF(false);
        }, 4000);
      });
    setCityName("");
  };
  const handleChange = (event: any) => {
    setCityName(event.target.value);
  };
  const _handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      findCityBTN();
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={"find-div"}>
        <input
          className={"find-style"}
          onKeyDown={_handleKeyDown}
          value={cityName}
          onChange={(event) => handleChange(event)}
          type="text"
          placeholder={"введите название города"}
        />
        <button onClick={() => findCityBTN()} className={"find-btn"}>
          искать
        </button>
      </div>
      {errorF ? (
        <p style={{ marginTop: "8px" }}>название города введено некоректно</p>
      ) : null}
    </div>
  );
};

function mapStateToProps(state: any) {
  return { dataDays: state };
}
function mapDispatchToProps(dispatch: any) {
  return {
    findCity: (data: any, name: any) =>
      dispatch({ type: "FIND_CITY", dataF: data, cName: name }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(InputPanel);
