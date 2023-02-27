import React from 'react'
import {View,Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Homescreen';
import ProductDetails from './cart/ProductDetails';
import Checkout from './cart/Checkout';
const Stack=createNativeStackNavigator();


const HomeStacks=({navigation,route})=>{
    const hideTabBar = (screen) => {
        if(screen===true){
            navigation.setOptions({
                tabBarStyle: { display: 'none' },
              });
        }else{
            navigation.setOptions({
                tabBarStyle: { display: 'flex' },
              });
        }
      };
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home">
                {(props)=><Home {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="ProductDetails">
                {(props)=><ProductDetails {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="Checkout">
                {(props)=><Checkout {...props} hideTabBar={hideTabBar}/> }
            </Stack.Screen>
        </Stack.Navigator>
    )
}


export default HomeStacks;