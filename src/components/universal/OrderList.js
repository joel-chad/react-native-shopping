import React, { useEffect, useState } from 'react';
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

export default function OrderList(props, {navigation}) {

//   useEffect(()=>{
//     setPeople(props.orders)
//     console.log(props.orders)
//   }, [])


  const renderOrders = ({item}) => (
    <TouchableOpacity onPress={() =>navigation.navigate('Order', item)} style={{marginTop: 0}}>
    <ListItem bottomDivider>
     <ListItem.Content>
       <ListItem.Title style={{color:'black', fontSize: 18}}>{item.status}</ListItem.Title>
       <ListItem.Subtitle style={{color: 'black'}}>{`Order Number: ${item._id}`}</ListItem.Subtitle>
       <ListItem.Subtitle style={{color: 'black'}}>{`$${item.bill}`}</ListItem.Subtitle>
     </ListItem.Content>
   </ListItem>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item._id} 
        data={props.orders} 
        renderItem={item=> renderOrders(item)}
      />

    </View>
  );
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