import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
import endpointNames from "../configs/serverUrls";

const orderUrl = endpointNames.order
const ordersUrl = endpointNames.orders
// const orderUrl = 'http://192.168.0.47/order'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2YmJiMGQ3N2MwMTZiMGFiMmMwMTMiLCJpYXQiOjE2Nzc1NDY2NjJ9.fw-dwLAVfoaPz9ny0i69iRolYnYxuTpCsIgJ-Mht0zk'



const checkout = async (request) => {
    // const token = AsyncStorage.getItem('token')

    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    let response
    await axios.post(orderUrl + '/checkout', request, options)
    .then((r) => {
        console.log("response ", r)
        response = r.data;
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