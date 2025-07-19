import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

//get all
const getAll = () => {
    return axios.get(`${baseUrl}/all`).then((response) => {
        return response.data;
    })
}

//get weather
const getWeather = (lat, long) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
        .then((response) => {
            console.log(response);
            return response;
        })
}


export default { getAll, getWeather };