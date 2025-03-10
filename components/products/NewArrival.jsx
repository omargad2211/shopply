import React from "react";
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
  Platform,
} from "react-native";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "@/redux/productsApi";

const NewArrival = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  // console.log(products);

  const latestProducts = products
    ?.slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 8);
  // console.log(latestProducts);

  // Handle loading state
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size="small"
          color={Platform.OS === "ios" ? "#999" : "#0000ff"}
        />
      </View>
    );
  }

  // Handle error state
  if (error) {
    return <Text>error</Text>;
  }

  // Handle empty data
  if (!products || products.length === 0) {
    return <Text>No products available.</Text>;
  }

  return (
    <View>
      <FlatList
        data={latestProducts}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        horizontal
        contentContainerStyle={{ columnGap: 2, paddingHorizontal: 2 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NewArrival;
