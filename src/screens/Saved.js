import React from 'react'
import {Dimensions,ActivityIndicator,View,Text, ScrollView} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import s from '../../styles/mainStyle';
import { useEffect, useState } from 'react/cjs/react.development';
import apiData from '../../api/getApi';
import ProductMini from '../components/universal/productmini';
import CartServices from '../services/CartServices';

const {width,height}=Dimensions.get('window');
export default function Saved(props){
    const [saved,setSaved]=useState([]);
    const [isLoading,setisLoading]=useState(true);

    const getSavedProducts=(url)=>{
        CartServices.getCartItems()
            .then(res=>{
                setSaved(res)
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    useEffect(()=>{
        getSavedProducts();
    },[]);

    return(
        <ScrollView>
           <FlatList
        data={[
         saved
        ]}
        renderItem={({item}) => 
        <Text style={styles.item}>{item.key}</Text>}
      />
        </ScrollView>
    )
}