// Imports axios for API calls
import axios from 'axios';
// Imports food API environmental variables
const BASE_URL = process.env.REACT_APP_BLU_API_URL;

// Function to get all blu-rays
export async function index() {
    return axios
        .get(BASE_URL)
        .then((res) => {
            console.log(res)
            return res.data
        })
        .catch((err) => console.log(err));
};

// Function to get a specific blu-ray
export async function show(id) {
    return axios
        .get(`${BASE_URL}${id}/`)
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));

};

// Function to get create a blu-ray
export async function create(data) {
    return axios
        .post(BASE_URL,data)
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));
};

// Function to update a specific blu-ray
export async function update(id,data) {
    return axios
        .put(`${BASE_URL}${id}/`,data)
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));

};

// Function to delete a specific blu-ray
export async function destroy(id) {
    return axios
        .delete(`${BASE_URL}${id}/`)
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));
    
}