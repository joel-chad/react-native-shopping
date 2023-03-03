import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import Button from "./Button";

export default function ProductCard({ key, product }) {
  return (
    <View style={styles.container} key={key}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>{product.handle}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          {/* ${product.variants[0].prices[1].amount / 100} */}
          <Text style={styles.price}>{product.subtitle || product.discount}</Text>
        </Text>

        <View style={[styles.buttonContainer]}>
            <Text
                style={[styles.buttonText, { fontSize: textSize ? textSize : widthToDp(3.5) }, ]}
                onPress={onPress}
            >
                "BUY"
            </Text>
    </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    borderRadius: 10,
    marginBottom: heightToDp(4),
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius:3.42,
    elevation: 2,
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
  buttonContainer: {
    backgroundColor: "#aaeebb",
    padding: 5,
    width: widthToDp(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
