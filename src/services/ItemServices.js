import axios from "axios";
import {AsyncStorage} from 'react-native'
import endpointNames from "../configs/serverUrls";

const itemsUrl = endpointNames.item
const token = AsyncStorage.getItem('token')

const options = {
    headers : {'Authorization': `Bearer ${token}`,
        //   'Content-Type': 'application/x-www-form-urlencoded',
      }
  }

  const getAllItems = async (request) => {
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

export default {
    getAllItems
}