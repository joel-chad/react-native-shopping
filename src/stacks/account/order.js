import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import Icon from "@expo/vector-icons/Ionicons"
import s from '../../../styles/mainStyle'

const OrderDetails = ({route}) =>{
    const [order, setOrder] = useState('')
    useEffect(()=>{
        const {item} = route.params
        setOrder(item)
    },[])

    const Details=(order)=>{
       
        console.log(order)
        switch(order){
            case "IN PROCESSING":
                return (
                    <View>
                    <Text>Your Order worth<Text>{order.price}</Text> is being processed. We will notify 
                    you with further details within the next few hours</Text>
                    </View>
                )
            case "IN TRANSIT":
                return(
                    <>
                    <View style={[s.fl1,s.pdlt10,s.mgtp20]}>
                        <Text style={s.f15}>
                            Your Order <Text style={s.clBl}>Mens Casual Tshirt</Text> has been confirmed by the Runner Team.
                        </Text>
                        <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>Estimated Delivery</Text>
                        <Text style={s.f18}>Today 5:30 pm</Text>
                    </View>
                    <View style={[s.row,s.spacedBw,s.pdlt10,s.pdrt10,s.bdbt1]}>
                        <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>Track Order</Text>
                        <Text style={[s.mgtp20,s.mgbt10,{color:'#a3a3a3',fontSize:12,paddingTop:4}]}>Order worth {order.bill}</Text>
                    </View>
                    <View style={[s.row,s.rowflStart,s.pdlt10,s.pdrt10,s.bdbt1]}>
                        <View style={s.flsemi}>
                            <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>
                                <Icon name="checkmark-circle-outline" size={32} color={'green'} />
                            </Text>
                        </View>
                        <View style={[s.fl3,s.pdbt10]}>
                            <Text style={[s.mgtp20,s.mgbt10,s.f18,s.b,{color:"#000000"}]}>Order Request Confirmed</Text>
                            <Text style={[s.f14,{color:'#00000099'}]}>
                                <Icon name="time-outline" /> 8:10 PM, 19 July,2021
                            </Text>
                        </View>
                    </View>
                    <View style={[s.row,s.rowflStart,s.pdlt10,s.pdrt10,s.bdbt1]}>
                        <View style={s.flsemi}>
                            <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>
                                <Icon name="checkmark-circle-outline" size={32} color={'cornflowerblue'} />
                            </Text>
                        </View>
                        <View style={[s.fl3,s.pdbt10]}>
                            <Text style={[s.mgtp20,s.mgbt10,s.f18,s.b,{color:"#00000099"}]}>Order dispatched to delivery</Text>
                            <Text style={[s.f14,{color:'#00000088'}]}>
                                <Icon name="time-outline" /> 8:10 AM, 20 July,2021
                            </Text>
                        </View>
                    </View>
                    <View style={[s.row,s.rowflStart,s.pdlt10,s.pdrt10,s.bdbt1]}>
                        <View style={s.flsemi}>
                            <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>
                                <Icon name="checkmark-circle-outline" size={32} color={'#00000088'} />
                            </Text>
                        </View>
                        <View style={[s.fl3,s.pdbt10]}>
                            <Text style={[s.mgtp20,s.mgbt10,s.f18,s.b,{color:"#00000088"}]}>Arriving Today</Text>
                            <Text style={[s.f14,{color:'#00000088'}]}>
                                <Icon name="time-outline" /> 8:10 AM, 20 July,2021
                            </Text>
                        </View>
                    </View>
                </>
                )  
                case "DELIVERED":
                    return(
                        <>
                        <View style={[s.row,s.rowflStart,s.pdlt10,s.pdrt10,s.bdbt1]}>
                        <View style={s.flsemi}>
                            <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>
                                <Icon name="checkmark-circle-outline" size={32} color={'#00000088'} />
                            </Text>
                        </View>
                        <View style={[s.fl3,s.pdbt10]}>
                            <Text style={[s.mgtp20,s.mgbt10,s.f18,s.b,{color:"#00000088"}]}>Your Order worth<Text style={s.clBl}>{order.price}</Text> has been delivered. Please 
                            visit your local post office if you have not seen it and feel free to get in touch with 
                            us with any complaints.</Text>
                            <Text style={[s.f14,{color:'#00000088'}]}>
                                <Icon name="time-outline" /> {order.updatedAt}
                            </Text>
                        </View>
                    </View>
                    </>
                    )
                default:
                    <View>Some error occured</View>
        }
    }
    
        <ScrollView>
            <Details order={order}/>
        </ScrollView>
    
    }

export default OrderDetails

