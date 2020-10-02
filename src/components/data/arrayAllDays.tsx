export function arrayAllDays(arrFive: any, arrOneCall: any): any {
  const { list } = arrFive;
  function getWeekDay(date: any) {
    let days = [
      "Воскресение",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    return days[date.getDay()];
  }
  const getNewData = (i: any) => {
    let today = new Date();
    return new Date(today.setDate(today.getDate() + i));
  };
  const arrCountDay = [0, 1, 2, 3, 4];
  const allDayTemp = (numDayGet: any) => {
    function getDaySet(el: any, getD: any) {
      let dataArrTrans = new Date(el.dt * 1000);
      dataArrTrans.setMilliseconds(-3 * 60 * 60 * 1000);
      switch (getD) {
        case "d":
          return dataArrTrans.getDate();
        case "h":
          return dataArrTrans.getHours();
        default:
          return null;
      }
    }
    const allDateTemp = list.filter((el: any) => {
      return getDaySet(el, "d") === numDayGet;
    });
    const allDays = (a: any) =>
      allDateTemp.filter((el: any) => {
        return getDaySet(el, "h") === a;
      });
    const undefinedReq = (unfReq: any, paramReq: any) => {
      if (allDays(unfReq).length < 1) {
        return "--";
      } else {
        switch (paramReq) {
          case "icon":
            return allDays(unfReq)[0].weather[0].icon;
          case "temp":
            return Math.floor(allDays(unfReq)[0].main.temp - 272);
          case "humidity":
            return allDays(unfReq)[0].main.humidity;
        }
      }
    };

    return [
      {
        name: "ночь",
        timeTwo: [
          {
            time: "0:00",
            img: undefinedReq(0, "icon"),
            temp: undefinedReq(0, "temp"),
            humidity: undefinedReq(0, "humidity"),
          },
          {
            time: "3:00",
            img: undefinedReq(3, "icon"),
            temp: undefinedReq(3, "temp"),
            humidity: undefinedReq(3, "humidity"),
          },
        ],
      },
      {
        name: "утро",
        timeTwo: [
          {
            time: "6:00",
            img: undefinedReq(6, "icon"),
            temp: undefinedReq(6, "temp"),
            humidity: undefinedReq(6, "humidity"),
          },
          {
            time: "9:00",
            img: undefinedReq(9, "icon"),
            temp: undefinedReq(9, "temp"),
            humidity: undefinedReq(9, "humidity"),
          },
        ],
      },
      {
        name: "день",
        timeTwo: [
          {
            time: "12:00",
            img: undefinedReq(12, "icon"),
            temp: undefinedReq(12, "temp"),
            humidity: undefinedReq(12, "humidity"),
          },
          {
            time: "15:00",
            img: undefinedReq(15, "icon"),
            temp: undefinedReq(15, "temp"),
            humidity: undefinedReq(15, "humidity"),
          },
        ],
      },
      {
        name: "вечер",
        timeTwo: [
          {
            time: "18:00",
            img: undefinedReq(18, "icon"),
            temp: undefinedReq(18, "temp"),
            humidity: undefinedReq(18, "humidity"),
          },
          {
            time: "21:00",
            img: undefinedReq(21, "icon"),
            temp: undefinedReq(21, "temp"),
            humidity: undefinedReq(21, "humidity"),
          },
        ],
      },
    ];
  };
  /////one call
  const getNewDataOneCall = (i: any) => {
    let today = new Date();
    return new Date(today.setDate(today.getDate() + i));
  };
  const allDayTempOneCall = (numDayGet: any) => {
    return arrOneCall.daily.filter((el: any) => {
      let dataReturn = new Date(el.dt * 1000);

      return dataReturn.getDate() === numDayGet;
    });
  };
  /////
  return arrCountDay.map((num) => {
    //текущий день
    const dateDays = getNewData(num);
    //номер дня
    const numDayGet = dateDays.getDate();
    //имя дня
    const nameToday = getWeekDay(dateDays);
    //температура на весь день
    let tempAllDay = allDayTemp(numDayGet);

    //////////// one call
    const dateDaysOneCall = getNewDataOneCall(num);
    // //номер дня
    const numDayGetOneCall = dateDaysOneCall.getDate();

    let tempAllDayOneCall = allDayTempOneCall(numDayGetOneCall)[0];
    return {
      yearsNum: dateDays.getFullYear().toString().substr(-2),
      numMonth: dateDays.getMonth() + 1,
      numDay: numDayGet,
      nameDay: nameToday,
      tempToday: Math.floor(tempAllDayOneCall.temp.day - 272),
      img: tempAllDayOneCall.weather[0].icon,
      likeTemp: Math.floor(tempAllDayOneCall.feels_like.day - 272),
      winter: tempAllDayOneCall.wind_deg,
      speedWinter: tempAllDayOneCall.wind_speed,
      humidity: tempAllDayOneCall.humidity,
      pressure: tempAllDayOneCall.pressure,
      //массив с теспературой за весь текущий день
      temp: tempAllDay,
    };
  });
}
