import axios from "axios";


const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
};

const createPerson = (newPerson) => {
    return axios.post(baseUrl, newPerson).then(response => response.data)
};

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

const updatePerson = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject);
}

export default { getAll, createPerson, deletePerson, updatePerson }