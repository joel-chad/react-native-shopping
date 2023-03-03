import axios from "axios";
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import endpointNames from "../configs/serverUrls";

const itemsUrl = endpointNames.item


  const getAllItems = async () => {
    
    let response
    await axios.get(itemsUrl)
    .then((r) => {
        // console.log("response ", r)
        response = r.data;
    }).catch(err => {
        response = err;
    });

    return response;
};

const getItemById = async id =>{
    
    let response
    await axios.get(itemsUrl + '/' + id)
    .then((r) => {
        // console.log("response ", r.data)
        response = r.data;
    }).catch(err => {
        response = err;
    });

    return response;
}

export default {
    getAllItems, getItemById
}