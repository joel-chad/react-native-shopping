import axios from "axios";
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import endpointNames from "../configs/serverUrls";

const itemsUrl = endpointNames.item


  const getAllItems = async (request) => {
    const token = AsyncStorage.getItem('token')

    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    let response
    await axios.get(itemsUrl, options)
    .then((r) => {
        console.log("response ", r)
        response = r;
    }).catch(err => {
        response = err;
    });

    return response;
};

const getItemById = async id =>{
    const token = AsyncStorage.getItem('token')

    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    let response
    await axios.get(itemsUrl, id, options)
    .then((r) => {
        console.log("response ", r)
        response = r;
    }).catch(err => {
        response = err;
    });

    return response;
}

export default {
    getAllItems, getItemById
}