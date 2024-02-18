import { useEffect } from "react";

const baseUrl = 'http://localhost:8080';
const commonHeaders = {
    'X-GIFTLOV-DATE': '12022024170000',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}




export const authenticate = async (username, password) => {
    debugger;
    // const authRequest = {username, password};
    // let result = await fetch("localhost:8080'/authenticate", {
    //     method: 'post',
    //     headers: {...commonHeaders},
    //     body: authRequest
    // }).catch(err => console.log("ERROR: ", err))
    // return result;
    let result = await fetch(`${baseUrl}/authenticate`, {
        method: 'post',
        headers: {...commonHeaders},
        body: JSON.stringify({
            username: username,
            password: password
        })
    });
    return result;

};

export const getCatalogItems = async (current, rowCount, includePricingDetails = false, searchPhrase = false) => {
    let result = await fetch(`${baseUrl}/items?current=${current}&rowCount=${rowCount}&includePricingDetails=${includePricingDetails}&searchPhrase=${searchPhrase}`);
    return result;
};

export const placeOrder = async (orderRequest) => {
    let result = await fetch(`${baseUrl}/orders/placeOrder`, {
        method: 'post',
        body: orderRequest
    });
    return result;
};

