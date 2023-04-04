import react, { useLayoutEffect, useEffect, useState } from "react";
import {
  StatusBar,
  Alert,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Icon from "@expo/vector-icons/Ionicons"
import s from '../../../styles/mainStyle'
import OrderServices from "../../services/OrderServices";
import OrderList from "../../components/universal/OrderList";

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

    const renderOrders = ({item}) => (
        <TouchableOpacity onPress={() =>props.navigation.navigate('Order', {"item": item})} style={{marginTop: 0}}>
        <ListItem bottomDivider>
         <ListItem.Content>
           <ListItem.Title style={{color:'black', fontSize: 18}}>{item.status}</ListItem.Title>
           <ListItem.Subtitle style={{color: 'black'}}>{`Order Number: ${item._id}`}</ListItem.Subtitle>
           <ListItem.Subtitle style={{color: 'black'}}>{`$${item.bill}`}</ListItem.Subtitle>
         </ListItem.Content>
       </ListItem>
        </TouchableOpacity>
      );
    
    return(
        <>
           {orders.length> 0 ? 
                <View style={styles.container}>

                <FlatList 
                    keyExtractor={(item) => item._id} 
                    data={orders} 
                    renderItem={item=> renderOrders(item)}
                />
            
                </View>
            :<Text>Loading..</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    item: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 24,
      padding: 30,
      backgroundColor: 'pink',
      fontSize: 24,
    },
  });