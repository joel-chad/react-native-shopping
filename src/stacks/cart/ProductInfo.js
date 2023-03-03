import { View, Text, ScrollView,TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../../components/universal/Image";
import ItemServices from '../../services/ItemServices'
import MetaInfo from '../../components/universal/MetaInfo'
import s from '../../../styles/mainStyle';


export default function ProductInfo({ route }) {
  const [productInfo, setproductInfo] = useState('');
  const [isLoading,setisLoading]=useState(true);
  
    useEffect(() => {
      const { productId } = route.params;
      // console.log(productId)
      ItemServices.getItemById(productId)
      .then(res=>{
        setproductInfo(res)
        setisLoading(false)
        // console.log(productInfo)
      })
      .catch(err=>{
        setisLoading(false)
        console.log(err)
      })
    
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {isLoading ?
      <View style={[s.fl1,s.tocnt,s.mgtp20]}>
				<ActivityIndicator size={'small'} />
			</View>
			:
      <>
        <View>
          <Images images={productInfo} />
          <MetaInfo product={productInfo} />
          </View>
        </>
        }
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