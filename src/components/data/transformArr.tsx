export function transformArr(data: any){
    const { daily} = data;

    function getWeekMonths(n: any) {
        let month = [
            "января",
            "февраля",
            "марта",
            "апреля",
            "мая",
            "июня",
            "июля",
            "августа",
            "сентября",
            "октября",
            "ноября",
            "декабря",
        ];
        return month[n];
    }
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
    const allDayTemp = (numDayGet: any) => {
        return daily.filter((el: any) => {
            let dataReturn = new Date(el.dt * 1000);

            return dataReturn.getDate() === numDayGet;
        });
    };

    const arrCountDay = [0, 1, 2, 3, 4];
    type testDaysWeather = {
        day: string;
        num: number;
        month: string;
        numMonth: any;
        img: string;
        tMin: number;
        tMax: number;
    };
    return  arrCountDay.map((num) : testDaysWeather => {
        //текущий день
        const dateDays = getNewData(num);
        // //номер дня
        const numDayGet = dateDays.getDate();
        //имя дня
        const nameToday = getWeekDay(dateDays);
        const numMonths = dateDays.getMonth() + 1;
        // //температура на весь день
        let tempAllDay = allDayTemp(numDayGet);
        return {
            day: nameToday,
            num: numDayGet,
            month: getWeekMonths(numMonths - 1),
            numMonth: numMonths,
            img: tempAllDay[0].weather[0].icon,
            tMin: Math.floor(tempAllDay[0].temp.min - 272),
            tMax: Math.floor(tempAllDay[0].temp.max - 272)
        };
    });

}