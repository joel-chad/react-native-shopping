import axios from "axios";
import {AsyncStorage} from 'react-native'
import endpointNames from "../configs/serverUrls";

const cartUrl = endpointNames.cart
const token = AsyncStorage.getItem('token')

const options = {
    headers : {'Authorization': `Bearer ${token}`,
        //   'Content-Type': 'application/x-www-form-urlencoded',
      }
  }

const addToCart = async (request) => {
    let response
    await axios.post(cartUrl, request, options)
    .then((r) => {
        console.log("response ", r)
        response = r;
    }).catch(err => {
        response = err;
    });

    return response;
};

const getCartItems = async (request) => {
    let response
    await axios.get(cartUrl, options).then((r) => {
        console.log("response ", r)
        response = r;
    }).catch(err => {
        response = err;
    });

    return response;
};
















export default {
    addToCart, getCartItems

}