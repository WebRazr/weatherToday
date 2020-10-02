import axios from "axios";

export async function dataDay (city = 'Kyiv') {
    const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fb29f9e6a701cff969bb669dc0bd7c35`
        );
    const coord = await res.data.city.coord
    const resOneCall = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly&appid=fb29f9e6a701cff969bb669dc0bd7c35`
        );
    return [res.data, resOneCall.data]

}
