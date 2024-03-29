import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ( name, description ) => (
  <View  style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{description}</Text>
  </View>
);

// the filter
const List = (props) => {
    
  const renderItem = ( item ) => {
    // when no input, show all
    
    if (props.searchPhrase === "") {
      return <Item name={item.name} description={item.description} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} description={item.description} />;
    }
    // filter of the description
    if (item.details.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} description={item.description} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          renderItem={item =>renderItem(item)}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});