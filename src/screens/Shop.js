// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View, TextInput,
  Keyboard, Button,  FlatList
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { ListItem, Avatar } from 'react-native-elements';

import List from "../components/universal/List";
// import SearchBar from "../components/universal/SearchBar";
import ItemServices from "../services/ItemServices";



const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  const SearchBar = () => {
    return (
      <View style={styles.container}>
        <View
          style={
            !clicked
              ? styles.searchBar__unclicked
              : styles.searchBar__clicked
          }
        >
          <Feather
            name="search"
            size={20}
            color="#d9dbda"
            style={{ marginLeft: 1 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Search.."
            value={searchPhrase}
            onChange={getData}
            onChangeText={text=>setSearchPhrase(text)}
            onFocus={() => {
              setClicked(true);
            }}
          />
          
          {clicked && (
            <Entypo name="cross" size={20} color="#d9dbda" style={{ padding: 1 }} onPress={() => {
                setSearchPhrase("")
            }}/>
          )}
        </View>
        {clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
            ></Button>
          </View>
        )}
      </View>
    );
  };

  const renderData = ({item}) => (
    <ListItem bottomDivider>
     <ListItem.Content>
       <ListItem.Title style={{color:'black', fontSize: 18}}>{item.name}</ListItem.Title>
       <ListItem.Subtitle style={{color: 'black'}}>{`Order Number: ${item.description}`}</ListItem.Subtitle>
       <ListItem.Subtitle style={{color: 'black'}}>{`$${item.price}`}</ListItem.Subtitle>
     </ListItem.Content>
   </ListItem>
  );
  
  const getData = async () => {
    console.log(searchPhrase)
    ItemServices.searchItems(searchPhrase)
    .then(res=>{
        setFakeData(res)
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
  
  };
  

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Search Products</Text>}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        // clicked={clicked}
        getData={getData}
        setClicked={setClicked}
      />
      {!fakeData ? (
        // <ActivityIndicator size="large" />
        <Text>Search Something..</Text>
      ) : (
        fakeData.length> 0 ? 
          <View style={styles.container}>

          <FlatList 
              keyExtractor={(item) => item._id} 
              data={fakeData} 
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