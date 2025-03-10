import React from "react";
import { FlatList, View, ActivityIndicator, Text } from "react-native";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "@/redux/productsApi";

const ProductRow = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  // console.log(products);

  // Handle loading state
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
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
        data={products}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        horizontal
        contentContainerStyle={{ columnGap: 2, paddingHorizontal: 2 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductRow;
