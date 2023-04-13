// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import List from "../components/universal/List";
import SearchBar from "../components/universal/SearchBar";
import ItemServices from "../services/ItemServices";

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api
  const getData = async () => {
    // const apiResponse = await fetch(
    //   "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
    // );
    // const data = await apiResponse.json();
    ItemServices.searchItems(searchPhrase)
    .then(res=>{
        setFakeData(res)
    })
    .catch(err=>{
        console.log(err)
    })
  //   setFakeData(data);
  };
  

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Search Products</Text>}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        getData={getData}
        setClicked={setClicked}
      />
      {!fakeData ? (
        // <ActivityIndicator size="large" />
        <Text>Search Something..</Text>
      ) : (
        
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />
        
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
});