import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CartServices from '../../services/CartServices'
import { height, heightToDp, widthToDp } from "rn-responsive-screen";
import NumericInput from 'react-native-numeric-input'

export default function MetaInfo({ product }) {
  const [activeSize, setActiveSize] = useState(0);
  const [quantity, setQuantity] = useState(1)

  const handlePress = () =>{
    let data = {
      itemId: product._id,
      quantity: quantity
    }
    console.log(data)
    CartServices.addToCart(data)
    .then(res=>{
        console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{product.name}</Text>
        <View>
          <Text style={styles.price}>
            ${product.price}
          </Text>
          <Text style={styles.star}>⭐⭐⭐</Text>
        </View>
      </View>
      {/* <Text style={styles.heading}>Available Sizes</Text> */}
      {/* <View style={styles.row}>
        {product.options[0].values.map((size, index) => (
          <Text
            onPress={() => {
              setActiveSize(index);
            }}
            style={[
              styles.sizeTag,
              {
                borderWidth: activeSize === index ? 3 : 0,
              },
            ]}
          >
            {size.value}
          </Text>
        ))}
      </View> */}
      {/* <Text style={styles.heading}>Description</Text> */}
      <Text style={styles.description}>{product.description}</Text>

      <NumericInput 
            // value={value} 
            onChange={value => {setQuantity(value)}} 
            // onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={widthToDp(50)} 
            totalHeight={heightToDp(10)} 
            iconSize={25}
            step={1}
            minValue={1}
            maxValue={20}
            valueType='real'
            // rounded 
            // textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#aaeebb' 
            leftButtonBackgroundColor='#aaeebb'/>


      {/* button  */}
          <View style={styles.button}>
          <Text
            style={[styles.buttonText, { fontSize: widthToDp(3.5) }, ]}
            onPress={handlePress}
          >
            Add to cart
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: heightToDp(-5),
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: heightToDp(50),
    padding: heightToDp(5),
  },
  title: {
    fontSize: heightToDp(6),
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: heightToDp(5),
    fontWeight: "bold",
    color: "#C37AFF",
  },
  heading: {
    fontSize: heightToDp(5),
    marginTop: heightToDp(3),
  },
  star: {
    fontSize: heightToDp(3),
    marginTop: heightToDp(1),
  },
  sizeTag: {
    borderColor: "#C37AFF",
    backgroundColor: "#F7F6FB",
    color: "#000",
    paddingHorizontal: heightToDp(7),
    paddingVertical: heightToDp(2),
    borderRadius: heightToDp(2),
    marginTop: heightToDp(2),
    overflow: "hidden",
    fontSize: heightToDp(4),
    marginBottom: heightToDp(2),
  },
  description: {
    fontSize: heightToDp(4),
    color: "#aaa",
    marginTop: heightToDp(2),
    marginBottom: heightToDp(7)
  },
  button: {
    backgroundColor: "#aaeebb",
    padding: 10,
    width: widthToDp(30),
    alignItems: "center",
    justifyContent: "right",
    borderRadius: 2,
    marginTop: widthToDp(5)
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});