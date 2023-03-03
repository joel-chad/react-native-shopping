import { ScrollView, StyleSheet,TouchableOpacity, View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/universal/ProductCard";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import axios from "axios";
import s from '../../styles/mainStyle';

import getApi from '../../api/getApi';
import Header from "../components/universal/header";
// import { Actions } from "react-native-router-flux";
import Button from "../components/universal/Button";
import ItemServices from "../services/ItemServices";
// import baseURL from "../constants/url";

const Products = ({navigation})=> {
  const [products, setProduct] = useState([]);
  const [allproduct,setAllProduct]=useState([]);
	const [isLoading,setisLoading]=useState(true);


  const getAllProducts=()=>{
    ItemServices.getAllItems()
    .then(result =>{
      //  console.log('result')
       setisLoading(false)
      setProduct(result)
    })
    .catch(error => console.log('error', error));
  }

  const imageUri = uri =>{
     return `https://runner-service.onrender.com/${uri.replace(/[\\]/g,'/')}`;
  }

  useEffect(()=>{
    // getProduct();
    getAllProducts();
  },[])

  return (
    <ScrollView>
       <Header/>
    <View style={styles.container}>
      <ScrollView>
      {isLoading ?
      <View style={[s.fl1,s.tocnt,s.mgtp20]}>
				<ActivityIndicator size={'small'} />
			</View>
			:
			<>
        <View style={styles.products}>
          {products.map((product) => (
            // <ProductCard key={product.id} product={product} />
            <View style={styles.cardContainer} key={product._id}>
            <Image
              source={{
                uri: imageUri(product.image[0]),
              }}
              style={styles.image}
            />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.category}>{product.description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                 ${product.price} 
              </Text>
      
              <Button
                title="BUY"
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('ProductInfo', {
                    'productId': product._id
                  });
                }
              }        
              />
            </View>
          </View>
          ))}
        </View>
        </>
        }
      </ScrollView>
    </View>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  products: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: widthToDp(100),
    paddingHorizontal: widthToDp(4),
    justifyContent: "space-between",
  },
  cardContainer: {
    shadowColor: "#000",
    borderRadius: 10,
    marginBottom: heightToDp(4),
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
    padding: 10,
    width: widthToDp(42),
    backgroundColor: "#fff",
  },
  image: {
    height: heightToDp(40),
    borderRadius: 7,
    marginBottom: heightToDp(2),
  },
  title: {
    fontSize: widthToDp(3.7),
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: heightToDp(3),
  },
  category: {
    fontSize: widthToDp(3.4),
    color: "#828282",
    marginTop: 3,
  },
  price: {
    fontSize: widthToDp(4),
    fontWeight: "bold",
  },
});

export default Products
