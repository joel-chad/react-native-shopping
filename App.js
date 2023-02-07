import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './src/screens/Homescreen'
import Icon from '@expo/vector-icons/Ionicons'
import SettingsScreen from './src/screens/SettingsScreen'
import Saved from './src/screens/Saved';
import Shop from './src/screens/Shop';
import AccountStacks from './src/stacks/accountArena.js';

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
    <SafeAreaView style={[s.fl1,Platform.OS === 'android' && s.mgtp30]}>
    <NavigationContainer theme={MyTheme}>
    <Tab.Navigator screenOptions={{ headerShown:false }} initialRouteName="Profile">
      <Tab.Screen name="Homes" component={HomeScreen}  options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={20} />
                )}} />

        <Tab.Screen name="Shop" component={Shop}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="grid-outline" color={color} size={20} />
                )
            }}
        />
         <Tab.Screen name="Saved" component={Saved}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="heart-outline" color={color} size={20} />
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
                {(props)=><AccountStacks {...props} />}
            </Tab.Screen>

    </Tab.Navigator>
    </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const s=StyleSheet.create({
	fl1:{flex:1},
	mgtp30:{marginTop:30}
})
