import axios from "axios";
import {AsyncStorage} from 'react-native'
import endpointNames from "../configs/serverUrls";

const orderUrl = endpointNames.order
const ordersUrl = endpointNames.orders
const token = AsyncStorage.getItem('token')

const options = {
    headers : {'Authorization': `Bearer ${token}`,
        //   'Content-Type': 'application/x-www-form-urlencoded',
      }
  }

const checkout = async (request) => {
    let response
    await axios.post(orderUrl + '/checkout', request, options)
    .then((r) => {
        console.log("response ", r)
        response = r;
    }).catch(err => {
        response = err;
    });

    return response;
};

const getOrderDetails = async (request) => {
    let response
    await axios.get(ordersUrl, options)
    .then((r) => {
        console.log("response ", r)
        response = r;
    }).catch(err => {
        response = err;
    });

    return response;
};
















export default {
    checkout, getOrderDetails

}