import { View, Text, ScrollView,TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../../components/universal/Image";
import ItemServices from '../../services/ItemServices'
import MetaInfo from '../../components/universal/MetaInfo'

export default function ProductInfo({ productId }) {
  const [productInfo, setproductInfo] = useState('');
  
    useEffect(() => {
      ItemServices.getItemById(productId)
      .then(res=>{
        setproductInfo(res)
        console.log(productInfo)
      })
      .catch(err=>{
        console.log(err)
      })
    
  }, []);

  return (
    <SafeAreaView style={styles.container}>
            {/* <TouchableOpacity onPress={() => Actions.pop()}>
        <Ionicons
          style={styles.icon}
          name="arrow-back-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity> */}
      <ScrollView>
        {productInfo && (
          <View>
            <Images images={[productInfo.image]} />
            <MetaInfo product={productInfo} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  icon: {
    marginLeft: 10,
  },
});