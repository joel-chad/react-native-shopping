import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    TouchableOpacity
} from "react-native";

const Checkout= () => {
    
        const [data, setData] = useState([])
        const [refreshing, setRefreshing] = useState(true)
        
    

    useEffect(()=>{
        fetchCats();
    }, [])

    const fetchCats = ()=> {
        setRefreshing(true)
        fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
            .then(res => res.json())
            .then(resJson => {
                setData(resJson)
                setRefreshing(false)
            }).catch(e => console.log(e));
    }

    renderItemComponent = (data) =>
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{ uri: data.item.url }} />
        </TouchableOpacity>

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    handleRefresh = () => {
         setRefreshing(false)  , () => { fetchCats()} ; // call fetchCats after setting the state
    }

      return (
        <SafeAreaView>
          <FlatList
            data={this.state.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
          <TouchableOpacity onPress={handleCheckout} style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
        </SafeAreaView>)
    
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },checkoutBtn:{
    width:"60%",
    backgroundColor:"#aaeebb",
    borderRadius:3,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  checkoutText:{
    color: "black"
  },
});

export default Checkout;