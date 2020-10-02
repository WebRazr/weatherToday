import { transformArr } from "../components/data/transformArr";
import { arrayAllDays } from "./../components/data/arrayAllDays";
type testDaysWeather = {
  day: string;
  num: number;
  month: string;
  numMonth: any;
  img: string;
  tMin: number;
  tMax: number;
};
type timeTwo = {
  time: string;
  img: string;
  temp: string;
  humidity: string;
};
type miniTempType = {
  name: string;
  timeTwo: Array<timeTwo>;
};
type typeAllDaysArr = {
  yearsNum: any;
  numDay: number;
  numMonth: any;
  nameDay: any;
  tempToday: any;
  likeTemp: any;
  img: string;
  winter: any;
  speedWinter: any;
  humidity: any;
  pressure: any;
  temp: Array<miniTempType>;
};
type typeState = {
  dataDays: any;
  dataOneCall: any;
  arrTopW: testDaysWeather | any;
  cityName: string;
  allDays: Array<typeAllDaysArr> | null;
  page: any;
  oneDayData: any;
};
let initialState: typeState = {
  dataDays: null,
  dataOneCall: null,
  arrTopW: [
    {
      day: "понедельник",
      img: `https://openweathermap.org/img/wn/02d@2x.png`,
      month: "сентябрь",
      numMonth: 12,
      num: 14,
      tMax: 24,
      tMin: 14,
    },
  ],
  cityName: "Киев",
  allDays: null,
  page: 1,
  oneDayData: null,
};
export default function rootReducer(
  state: typeState = initialState,
  action: any
) {
  switch (action.type) {
    case "CREATE_DATE":
      return {
        ...state,
        dataDays: action.data[0],
        dataOneCall: action.data[1],
        arrTopW: transformArr(action.data[1]),
        allDays: arrayAllDays(action.data[0], action.data[1]),
      };
    case "FIND_CITY": {
      return {
        ...state,
        dataDays: action.dataF[0],
        dataOneCall: action.dataF[1],
        arrTopW: transformArr(action.dataF[1]),
        cityName: action.cName,
        allDays: arrayAllDays(action.dataF[0], action.dataF[1]),
      };
    }
    case "FIND_DAY": {
      let datDataW = state.oneDayData;
      if (state.allDays !== null) {
        datDataW = state.allDays.filter(
          (el: any) => el.numDay === +action.numDay
        );
      }
      return {
        ...state,
        page: action.numDay,
        oneDayData: datDataW,
      };
    }
    case "DATA_DAY": {
      console.log("hellosssss");
      if (state.allDays !== null) {
        let datDataW = state.allDays.filter(
          (el: any) => el.numDay === +state.page
        );
        let a = state.allDays.filter((el: any) => el.numDay === +state.page);
        if (a.length === 0) {
          let newPage = state.allDays[0].numDay;
          return {
            ...state,
            page: newPage,
            oneDayData: state.allDays.filter(
              (el: any) => el.numDay === +newPage
            ),
          };
        } else {
          return {
            ...state,
            oneDayData: datDataW,
          };
        }
      }
    }
    default: {
      return state;
    }
  }
}
