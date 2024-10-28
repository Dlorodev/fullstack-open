import axios from "axios";


const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

//get all
const getAll = () => {
    return axios.get(`${baseUrl}/all`).then((response) => {
        return response.data;
    })
}


export default { getAll };