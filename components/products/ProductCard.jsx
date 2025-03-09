import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ProductCard = ({ product }) => {
     const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/product/${product.id}`)}
      style={styles.card}
    >
      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* Product Info */}
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.supplier} numberOfLines={1}>
          {product.supplier}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="cart-outline" size={18} color="white" />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    width: 180, // Adjust based on your layout
    margin: 10,
  },
  image: {
    width: "100%",
    height: 120, // Adjust as needed
    resizeMode: "cover",
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  supplier: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#228B22", // Green color for price
    marginBottom: 8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#224241",
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default ProductCard;
