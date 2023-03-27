import react, { useLayoutEffect, useState } from "react";
import {View,Text, ScrollView} from 'react-native'
import Icon from "@expo/vector-icons/Ionicons"
import s from '../../../styles/mainStyle'
import { useEffect } from "react/cjs/react.development";
import OrderServices from "../../services/OrderServices";
import OrderDetails from "../../components/universal/OrderDetails";

export default function TrackOrder(props){
    const [orders, setOrders] = useState([])
    const getOrders = ()=>{
        OrderServices.getOrderDetails()
        .then(res=>{
            // console.log(res)
            setOrders(res)
            // console.log(orders)
        })
    }
    useEffect(()=>{
        getOrders()
    }, [])
    useLayoutEffect(()=>{
        props.hideTabBar(true)
        return () => {
            props.hideTabBar(false);
        }
    },[])
    
    return(
        <>
           {orders.length> 0 ? <OrderDetails orders={orders}/>
            :<Text>Loading..</Text>}
        </>
    )
}

