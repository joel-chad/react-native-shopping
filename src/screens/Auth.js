import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Auth = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('SignIn');
      };
  return (
    <View style={styles.container}>
        <Text style={styles.text}>You are not signed in.</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#aaeebb',
    width: "40%",
    padding: 10,
    borderRadius: 2,
    paddingHorizontal: 5
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  text:{
    marginBottom:20,
    fontSize: 15
    
  }
});

export default Auth;