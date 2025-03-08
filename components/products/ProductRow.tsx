import React from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./ProductCard";

const ProductRow = () => {
  // Array of 5 products
  const products = [
    {
      id: "1",
      image:
        "https://i.pinimg.com/originals/eb/da/09/ebda09add36382f430966c53bd57d2a1.jpg",
      title: "Salon",
      supplier: "Nike",
      price: 89.99,
    },
    {
      id: "2",
      image:
        "https://i8.amplience.net/i/aarons/30407/7%20-%20Piece%20Juararo%20Queen%20Panel%20Bedroom%20Set?$large$",
      title: "Bed Room",
      supplier: "Apple",
      price: 199.99,
    },
    {
      id: "3",
      image:
        "https://i.pinimg.com/originals/c3/8a/f0/c38af0dc4844693753b27d50d819a379.jpg",
      title: "Personal office",
      supplier: "Sony",
      price: 149.99,
    },
    {
      id: "4",
      image:
        "https://i.pinimg.com/originals/71/d4/dd/71d4dd0d13df868c9113c221619620af.jpg",
      title: "Bed room",
      supplier: "Gucci",
      price: 249.99,
    },
    {
      id: "5",
      image:
        "https://cdn.homedit.com/wp-content/uploads/scandinavian-design/Light-Wood-Furniture.jpg",
      title: "Bed",
      supplier: "Ray-Ban",
      price: 129.99,
    },
  ];

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        horizontal
        contentContainerStyle={{ columnGap: 10, paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductRow;
