import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { IProductProps } from "./interface";
import { formatAmountWithCurrency } from "../../utils/functions";
import { Colors } from "../../config/colors";

const Product = ({
  name,
  imageUrl,
  amount,
  currency,
  price,
}: IProductProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl, cache: "reload" }}
          style={styles.image}
          onLoadEnd={() => setLoading(false)}
        />
        {loading ? (
          <ActivityIndicator
            color={Colors.secondary}
            style={styles.loader}
            size={"large"}
          />
        ) : undefined}
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>
          {formatAmountWithCurrency(price, currency)}
        </Text>
        <Text style={styles.qty}>Qty: {amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    margin: 10,
    borderRadius: 5,
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 10,
    margin: 10,
    borderRadius: 5,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: Colors.primary + "35",
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    paddingVertical: 8,
  },
  qty: {
    fontSize: 14,
    color: Colors.primary,
    paddingVertical: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  loader: {
    position: "absolute",
  },
});

export default Product;
