import axios from "axios";
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import endpointNames from "../configs/serverUrls";

const orderUrl = endpointNames.order
const ordersUrl = endpointNames.orders


const checkout = async (request) => {
    const token = AsyncStorage.getItem('token')

    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
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
    const token = AsyncStorage.getItem('token')

    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
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