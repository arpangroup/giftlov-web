import axios from "axios";

const BASE_URL = 'http://localhost:8080';
axios.defaults.baseURL = BASE_URL;

export default axios.create({
    baseURL: BASE_URL
});

export const authenticate = async(username, password) => {    
    let result = await axios.post(`/authenticate`, { username, password})
    .then(resp => resp.data)
    .catch(err => console.log("ERROR: ", err))
    return result;
};

export const getCatalogItems = async (current=1, rowCount=10, includePricingDetails = false, searchPhrase = false) => {
    let result = await axios.get(`/items?current=${current}&rowCount=${rowCount}&includePricingDetails=${includePricingDetails}&searchPhrase=${searchPhrase}`)
    .then(resp => resp.data)
    .catch(err => console.log("ERROR: ", err))
    return result;
};

export const placeOrder = async (orderRequest) => {
    let result = await axios.post(`/orders/placeOrder`, orderRequest)
    .then(resp => resp.data)
    .catch(err => console.log("ORDER_RESPONSE: ", err))
    return result;
};
