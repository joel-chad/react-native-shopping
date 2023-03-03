import React from 'react'
import {View,Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/ProdDetails';
import ProductInfo from './cart/ProductInfo';
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
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
            <Stack.Screen name="Home">
                {(props)=><Products {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="ProductInfo">
                {(props)=><ProductInfo {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="Checkout">
                {(props)=><Checkout {...props} hideTabBar={hideTabBar}/> }
            </Stack.Screen>
        </Stack.Navigator>
    )
}


export default HomeStacks;