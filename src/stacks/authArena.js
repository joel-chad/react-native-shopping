import React from 'react'
import {View,Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/Auth';
import SignIn from './auth/SignIn';
import SIgnUp from './auth/Signup';
const Stack=createNativeStackNavigator();


const AuthStacks=({navigation,route})=>{
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
        <Stack.Navigator initialRouteName='Auth'>
            <Stack.Screen name="Auth">
                {(props)=><Auth {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="SignUp">
                {(props)=><SIgnUp {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="SignIn">
                {(props)=><SignIn {...props} hideTabBar={hideTabBar}/> }
            </Stack.Screen>
        </Stack.Navigator>
    )
}


export default AuthStacks;