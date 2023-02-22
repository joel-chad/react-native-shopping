import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import UserServices from '../../services/UserServices'

const SignIn =({navigation})=>{
//   state={
//     email:"",
//     password:""
//   }
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')

    const handlePress = () => {
      navigation.navigate('SignUp');
    };

    const login = () =>{
      console.log("logged in")
      let data = {
        "email": email,
        "password": password
      }

      UserServices.login(data)
      .then(res=>{
        console.log(res);
                if (res.status === 200 || res.status === 201||res.status === 204) {
                    console.log(res)
                    // setLoading(false);
                }
      }).catch(err=>{
        console.log(err)
      })
    }

    return (
      <View style={styles.container}>
        {/* <Text style={styles.logo}>Runner</Text> */}
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={login} style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.signupText}>Don't have an account? Sign Up.</Text>
        </TouchableOpacity>

  
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    // backgroundColor:"#465881",
    borderRadius:2,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    borderBottomColor: 'black',
    padding:20, 
    borderBottomWidth: 1
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize: 16,
  },
  loginBtn:{
    width:"60%",
    backgroundColor:"#aaeebb",
    borderRadius:3,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black"
  },
  signupText:{
    color: "cornflowerblue",
    fontSize: 16,
    marginTop: 10
  }
});

export default SignIn;