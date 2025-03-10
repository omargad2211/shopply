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

const BudgetPick = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
//   console.log(products);

  const budgetProducts = products
    ?.slice()
    .sort((a, b) => new Date(Number(a.price)) - new Date(Number(b.price)))
    .slice(0, 7);
//   console.log(budgetProducts);

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
        data={budgetProducts}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        horizontal
        contentContainerStyle={{ columnGap: 2, paddingHorizontal: 2 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default BudgetPick;
