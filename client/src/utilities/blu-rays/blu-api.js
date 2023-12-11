// Imports axios for API calls
import axios from 'axios';
import * as tools from '../tools'

// Imports food API environmental variables
const BASE_URL = process.env.REACT_APP_PROD_API;

// Function to get all blu-rays
export async function index(token,owner) {
    return axios
        .get(BASE_URL,tools.authConfig(token,owner))
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));
};

// Function to get a specific blu-ray
export async function show(token, owner, id) {
    return axios
        .get(`${BASE_URL}${id}/`,tools.authConfig(token,owner))
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));

};

// Function to get create a blu-ray
export async function create(token,owner,data) {
    console.log(data)

    return axios
        .post(BASE_URL,data,tools.authConfig(token,owner))
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));
};

// Function to update a specific blu-ray
export async function update(token,owner,id,data) {
    return axios
        .put(`${BASE_URL}${id}/`,data,tools.authConfig(token,owner))
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));

};

// Function to delete a specific blu-ray
export async function destroy(token,owner,id) {
    return axios
        .delete(`${BASE_URL}${id}/`,tools.authConfig(token,owner))
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));
    
}

// Function to get blu-ray feed
export async function feed(token,owner) {
    return axios
        .get(`${BASE_URL}feed/`,tools.authConfig(token,owner))
        .then((res) => {
            for (let i = 0;  i < res.data.length; i++){
                delete res.data[i].owner
            }
            return res.data
        })
        .catch((err) => console.log(err));
};

// Function to get others blu-ray
export async function other(token,owner,id) {
    return axios
        .get(`${BASE_URL}feed/${id}`,tools.authConfig(token,owner))
        .then((res) => {
            delete res.data.owner
            return res.data
        })
        .catch((err) => console.log(err));
};

// Function to get users blu-rays
export async function user(token,owner,user) {
    return axios
        .get(`${BASE_URL}user/${user}`,tools.authConfig(token,owner))
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));
};