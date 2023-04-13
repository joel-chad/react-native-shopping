import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Ionicons'
import Saved from './src/screens/Cart';
import Shop from './src/screens/Shop';
import AccountStacks from './src/stacks/accountArena.js';
import AuthStacks from './src/stacks/authArena';
import HomeStacks from './src/stacks/cartArena';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartContext from './src/context/GlobalState';
import Auth from './src/stacks/Auth';

const Tab = createBottomTabNavigator();

const MyTheme = {
	...DefaultTheme,
	colors: {
	  ...DefaultTheme.colors,
	  background: '#ffffff'
	},
  };

export default function App() {
    
  return (
    <CartContext>
    <SafeAreaView style={[s.fl1,Platform.OS === 'android' && s.mgtp30]}>
    <NavigationContainer theme={MyTheme}>
    <Tab.Navigator screenOptions={{ headerShown:false }} initialRouteName="Homes">
      {/* <Tab.Screen name="Homes" component={HomeScreen}  options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={20} />
                )}} /> */}
        <Tab.Screen name="Homes"
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={20} />
                ),
                headerShown:false,
                headerTitle:'Home'
            }}>
                {(props)=><HomeStacks {...props} />}
            </Tab.Screen>
 
        <Tab.Screen name="Search" component={Shop}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="search-outline" color={color} size={20} />
                )
            }}
        />
         <Tab.Screen name="Cart" component={Saved}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="cart-outline" color={color} size={20} />
                )
            }}
        />
    
        <Tab.Screen name="Profile"
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="person-circle-outline" color={color} size={20} />
                ),
                headerShown:false,
                headerTitle:'Account'
            }}>
                {(props)=>
                <Auth {...props}/>
                // AsyncStorage.getItem("token")!==null ? <AuthStacks {...props}/> :<AccountStacks {...props} />
                }
            </Tab.Screen>

    </Tab.Navigator>
    </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
    </CartContext>
  );
}

const s=StyleSheet.create({
	fl1:{flex:1},
	mgtp30:{marginTop:30}
})
