import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/redux/wishlistSlice";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function WishListScreen() {
  const router = useRouter();
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist({ id }));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/product/${item._id}`)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.supplier}>{item.supplier}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemove(item._id)}
          >
            <Ionicons name="trash-bin" size={22} color="#FF4D4D" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => router.push(`/product/${item._id}`)}
          >
            <AntDesign name="eyeo" size={22} color="#224241" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> My Wishlist</Text>
      {wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-dislike" size={64} color="#ccc" />
          <Text style={styles.emptyText}>Your wishlist is feeling empty!</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#FAFAFA",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#224241",
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  supplier: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  actions: {
    flexDirection: "row",
    marginTop: 10,
  },
  removeButton: {
    marginRight: 15,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#FFEBEB",
  },
  detailsButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#EAF7F5",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    color: "#aaa",
    marginTop: 15,
    textAlign: "center",
  },
});
