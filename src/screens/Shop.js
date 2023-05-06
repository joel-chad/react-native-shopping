// Home.js
import React, { useState, useEffect } from "react";
import {Dimensions,View,Text,TextInput, SafeAreaView, FlatList, StyleSheet} from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import { ListItem, Avatar } from 'react-native-elements';
import s from '../../styles/mainStyle';
const {width,height}=Dimensions.get('window');


import ItemServices from "../services/ItemServices";
import Header from "../components/universal/header";
import { TouchableOpacity } from "react-native";



const Home = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();


  
	const search = text =>{
		
		console.log(text)
		setSearchPhrase(text)
		if(text.length>1){
			getData(text)
		}
	}

  const renderData = ({item}) => (
    <TouchableOpacity onPress={() => {
      /* 1. Navigate to the Details route with params */
      navigation.navigate('ProductInfo', {
        'productId': item._id,
        screen: 'SearchResult',
      });
    }
  }>
    <ListItem bottomDivider>
     <ListItem.Content>
       <ListItem.Title style={{color:'black', fontSize: 18}}>{item.name}</ListItem.Title>
       <ListItem.Subtitle style={{color: 'black'}}>{`Order Number: ${item.description}`}</ListItem.Subtitle>
       <ListItem.Subtitle style={{color: 'black'}}>{`$${item.price}`}</ListItem.Subtitle>
     </ListItem.Content>
   </ListItem>
   </TouchableOpacity>
  );
  
  const getData = async () => {
		console.log(searchPhrase)
		ItemServices.searchItems(searchPhrase)
		.then(res=>{
			setData(res)
			console.log(res)
		})
		.catch(err=>{
			console.log(err)
		})
	  
	  };
  

  return (
    <SafeAreaView style={styles.root}>

      <Header
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        getData={getData}
        setClicked={setClicked}
      />
      {!data ? (
        // <ActivityIndicator size="large" />
        <Text>Search Something..</Text>
      ) : (
        data.length> 0 ? 
          <View style={styles.container}>

          <FlatList 
              keyExtractor={(item) => item._id} 
              data={data} 
              renderItem={item=> renderData(item)}
          />
      
          </View>
      :<Text>Loading..</Text>
        
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    borderRadius: 4,
    alignItems: "center",
    borderColor: '#d9dbda',
    borderWidth: 0.5,
    justifyContent: 'center'
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    borderColor: "black",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: .5
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  }
});