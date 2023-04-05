import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import Icon from "@expo/vector-icons/Ionicons"
import s from '../../../styles/mainStyle'

const Card = ({ price, status, start_date, end_date, id, delivery}) => {
    console.log(end_date)
  let content

  if (status=="IN PROCESSING") {
    content =  <View>
    <Text>Your Order worth $<Text>{price}</Text> is being processed. We will notify 
    you with further details within the next few hours</Text>
    </View>
  }
   else if (status=="IN TRANSIT") {
    content = <>
                <View>
                    <Text >
                        Your Order number<Text> {id} </Text>has been confirmed by the Runner Team.
                    </Text>
                    <Text>
                        Date of Order: <Text> {start_date} </Text>.
                    </Text>
                    <Text>Order worth: ${price}</Text>
                </View>
                <View>
                    <Text>Track Order</Text>
                    <Text>Delivery Duration Estimate: {delivery} hours</Text>
                </View>  
            </>
  } else {
    content = (
        <>
            <View>
            <View>
                <Text>
                    <Icon name="checkmark-circle-outline" size={32} color={'#00000088'} />
                    <Text>Your Order worth<Text>{price}</Text> has been delivered at <Text>{end_date}</Text>.</Text>
                </Text>
            </View>
            <View>
                <Text>
                 Please 
                visit your local post office if you have not seen it and feel free to get in touch with 
                us with any complaints.</Text>
                <Text>
                    <Icon name="time-outline" /> {end_date}
                </Text>
            </View>
        </View>
    </>
    )
  } 
   return <View style={{ padding: 24 }}>{content}</View>
}

export default function Order({route}) {
    const [order, setOrder] = useState('')
    useEffect(()=>{
        const {item} = route.params
        setOrder(item)
        console.log(order.updatedAt)
    },[])

    return (
    <View>
      <Card status={order.status} start_date={order.createdAt}
       end_date={order.updatedAt} price={order.bill} id={order._id} delivery={order.delivery_time}/>
      
    </View>
  )
}