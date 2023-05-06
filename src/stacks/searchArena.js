import React from 'react'
import {View,Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from '../screens/Shop';
import SearchInfo from './search/SearchInfo';
import Checkout from './search/Checkout';
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
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Shop'>
            <Stack.Screen name="Shop">
                {(props)=><Shop {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="SearchResult">
                {(props)=><SearchInfo {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="Checkout">
                {(props)=><Checkout {...props} hideTabBar={hideTabBar}/> }
            </Stack.Screen>
        </Stack.Navigator>
    )
}


export default HomeStacks;