import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

const SearchCard = ({ product }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.searchCard}
      onPress={() => {
        router.push(`/product/${product._id}`);
      }}
    >
      <View style={styles.searchFirst}>
        <Image style={styles.image} source={{ uri: product.imageUrl }} />
        <View>
          <Text style={styles.productName}>{product.title}</Text>
          <Text style={styles.supplier}>{product.supplier}</Text>
          <Text style={styles.price}>{product.price}$</Text>
        </View>
      </View>
      <MaterialCommunityIcons name="cart-plus" size={28} color="#4CAF50" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchCard: {
    backgroundColor: "#fff",
    height: 90,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchFirst: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    height: 64,
    width: 64,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#224241",
  },
  supplier: {
    fontSize: 14,
    color: "#888",
    marginTop: 2,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 4,
  },
});

export default SearchCard;
