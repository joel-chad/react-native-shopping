import React, { useState, useContext, useEffect } from 'react';
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
import CartServices from '../services/CartServices';
import Icon from 'react-native-vector-icons/Ionicons'
import Button from '../components/universal/Button';
import { widthToDp, heightToDp } from "rn-responsive-screen";
import Context from '../context/context';
import OrderServices from '../services/OrderServices';


export default function Cart() {
  const context = useContext(Context)
  const [data, setData] = useState([])
  const [bill, setBill] = useState('')
  const [isLoading, setLoading] = useState(false)

     const getSavedProducts=()=>{
        CartServices.getCartItems()
            .then(res=>{
                setBill(res.bill)
                // setData(res.items)
                // data.forEach(item=>{
                //   context.addNewItem(item)
                // })
                         
              })
            .catch(err=>{
                console.log(err)
            })
    }

    const handleCheckout = () =>{
      setLoading(true)
      OrderServices.checkout()
      .then(res=>{
        console.log(res)
        context.deleteItem()
        setBill(0)
        setLoading(false)
        Alert.alert('Alert Title', `Checkout Done. You will pay ${res.order.bill}.\n Please check
        delivery details in the Orders tab on your profile` , [
          {
            text: 'Done',
            style: 'cancel',
          }
        ])
      })
      .catch(err=>{
        setLoading(false)
        console.log(err)
        isLoading
      })
    }

  
    const renderCats = ({item}) => (
      <View style={{marginTop: 0, marginLeft: 8}}>
      <ListItem bottomDivider>
        <TouchableOpacity>
      {/* <Avatar rounded large source={{uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg'}} height={36} width={36} /> */}
       <ListItem.Content>
         <ListItem.Title style={{color:'black', fontSize: 18}}>{item.name}</ListItem.Title>
         <ListItem.Subtitle style={{color: 'black'}}>{`$${item.price}`}</ListItem.Subtitle>
         <ListItem.Subtitle style={{color: 'black'}}>{`${item.quantity} units`}</ListItem.Subtitle>
       </ListItem.Content>
       </TouchableOpacity>
     </ListItem>
      </View>
    );
  
  
    useEffect(()=>{
      getSavedProducts()
      // console.log(context.items)
    }, [])
  
        return(
        context.items == undefined || context.items == [] || context.items.length==0 ?
        <View style={styles.blank}>
          <Text>There are currently no items in the cart</Text>
        </View>
        :
        <SafeAreaView style={{ flex: 1}}>
          {
          isLoading ?
          <View style={styles.activity}>
            <ActivityIndicator size={'small'} />
          </View>
          :
          <>
          <View style={styles.checkout}>
            <Button style={styles.button}
                  title="Checkout" 
                  onPress={handleCheckout}    
            />          
            </View>

          <FlatList
            removeClippedSubviews={true}
            data={context.items} 
            renderItem={item => renderCats(item)}
          />
          <View style={styles.bill}>
          <Text style={styles.total}>Total: {bill}</Text>
          </View>
          </>
          }
      </SafeAreaView>
        )
      }
    

  const styles = StyleSheet.create({
    total: {
        fontSize: 25,
        // justifyContent: 'flex-end'
    },
    bill:{
      flex:1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 10
    },
    checkout:{
      flex:1,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      padding: 10
    }, 
    button: {
      width: widthToDp(25),
      height: heightToDp(10)
    },
    activity: {
      flex: 1,
      justifyContent: 'center'
    },
    blank:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
  
