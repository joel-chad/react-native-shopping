import axios from "axios";
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import endpointNames from "../configs/serverUrls";

const itemsUrl = endpointNames.item
// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2YmJiMGQ3N2MwMTZiMGFiMmMwMTMiLCJpYXQiOjE2Nzc1NDY2NjJ9.fw-dwLAVfoaPz9ny0i69iRolYnYxuTpCsIgJ-Mht0zk'

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

const searchItems = async searchQuery=>{
    const token = await AsyncStorage.getItem('token')
    let response;
    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    await axios.get(itemsUrl + '/search/' + searchQuery, options)
    .then((r) => {
        // console.log("response ", r.data)
        response = r.data;
    }).catch(err => {
        response = err;
    });

    return response;
}

export default {
    getAllItems, getItemById, searchItems
}