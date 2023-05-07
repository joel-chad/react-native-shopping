import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import endpointNames from "../configs/serverUrls";

const cartUrl = endpointNames.cart

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2YmJiMGQ3N2MwMTZiMGFiMmMwMTMiLCJpYXQiOjE2Nzc1NDY2NjJ9.fw-dwLAVfoaPz9ny0i69iRolYnYxuTpCsIgJ-Mht0zk'

const addToCart = async (request) => {
    
    const token = await AsyncStorage.getItem('token')
    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
          }
      }
    let response
    await axios.post(cartUrl, request, options)
    .then((r) => {
        // console.log("response ", r.data)
        response = r.data;
    }).catch(err => {
        response = err;
    });

    return response;
};

const getCartItems = async (request) => {
    const token = await AsyncStorage.getItem('token')
    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
          }
      }
    let response
    await axios.get(cartUrl, options).then((r) => {
        console.log("response ", r.data)
        response = r.data;
    }).catch(err => {
        response = err;
    });

    return response;
};
















export default {
    addToCart, getCartItems

}