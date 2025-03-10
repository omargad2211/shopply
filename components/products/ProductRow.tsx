import React from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./ProductCard";

const ProductRow = () => {
  // Array of 5 products with descriptions
const products = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/originals/eb/da/09/ebda09add36382f430966c53bd57d2a1.jpg",
    title: "Modern Salon Set",
    supplier: "Home Elegance",
    price: 89.99,
    description:
      "The Modern Salon Set is a stylish and comfortable furniture piece, perfect for contemporary interiors. Designed with high-quality materials, it offers durability and elegance. The ergonomic seating ensures maximum comfort, making it ideal for both personal and professional spaces. The sleek and minimalist design seamlessly blends with various decor styles, adding a touch of sophistication. Whether you’re furnishing a beauty salon, a waiting area, or a cozy corner at home, this set provides the perfect balance of aesthetics and functionality.",
  },
  {
    id: "2",
    image:
      "https://i8.amplience.net/i/aarons/30407/7%20-%20Piece%20Juararo%20Queen%20Panel%20Bedroom%20Set?$large$",
    title: "Luxury Bedroom Set",
    supplier: "Dream Living",
    price: 199.99,
    description:
      "Transform your bedroom into a luxurious retreat with the Dream Living Luxury Bedroom Set. Crafted from premium wood and finished with intricate detailing, this set exudes elegance and sophistication. The spacious bed frame ensures comfort, while the matching nightstands and dresser offer ample storage for all your essentials. With a timeless design and high-quality craftsmanship, this set is perfect for those who appreciate fine living. Whether you're looking to upgrade your decor or create a cozy yet elegant atmosphere, this bedroom set is the perfect choice.",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/originals/c3/8a/f0/c38af0dc4844693753b27d50d819a379.jpg",
    title: "Personal Office Desk",
    supplier: "OfficePro",
    price: 149.99,
    description:
      "Enhance your productivity with the OfficePro Personal Office Desk, designed for professionals and students alike. Featuring a sleek and modern design, this desk provides a spacious work surface to accommodate your laptop, documents, and accessories. The built-in storage compartments help keep your workspace organized, while the durable construction ensures long-lasting use. Whether you're working from home or setting up an office, this ergonomic desk offers both comfort and functionality to improve your daily workflow.",
  },
  {
    id: "4",
    image:
      "https://i.pinimg.com/originals/71/d4/dd/71d4dd0d13df868c9113c221619620af.jpg",
    title: "Cozy Bedroom Set",
    supplier: "Comfort Zone",
    price: 249.99,
    description:
      "Create a warm and inviting bedroom space with the Comfort Zone Cozy Bedroom Set. Designed for relaxation and comfort, this set includes a beautifully crafted bed frame, nightstands, and a dresser with ample storage. The soft, neutral tones complement any decor style, while the high-quality materials provide durability and stability. Whether you want a peaceful retreat after a long day or a stylish upgrade to your space, this bedroom set combines elegance with coziness for the perfect sleeping environment.",
  },
  {
    id: "5",
    image:
      "https://cdn.homedit.com/wp-content/uploads/scandinavian-design/Light-Wood-Furniture.jpg",
    title: "Minimalist Bed Frame",
    supplier: "ScandiHome",
    price: 129.99,
    description:
      "Embrace simplicity with the ScandiHome Minimalist Bed Frame, a perfect blend of Scandinavian design and modern elegance. Made from high-quality wood with a natural finish, this bed frame brings warmth and character to your bedroom. Its sturdy construction ensures durability, while the clean lines and minimalist aesthetic make it a versatile addition to any decor. Designed for those who appreciate simplicity and functionality, this bed frame offers a peaceful and stylish foundation for restful sleep.",
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
