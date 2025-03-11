import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useGetProductByIdQuery } from "@/redux/productsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  loadWishlist,
  removeFromWishlist,
} from "@/redux/wishlistSlice";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  // console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWishlist());
  }, []);

  const wishlist = useSelector((state) => state.wishlist.items);
  const isSelected = wishlist?.some((item) => item._id === id);
  // console.log(isSelected);

  const handleToggleWishlist = () => {
    if (isSelected) {
      dispatch(removeFromWishlist({ id }));
    } else {
      dispatch(addToWishlist(product));
    }
  };

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

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.detailsHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={32} color={"#224241"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleToggleWishlist}>
          <Ionicons
            name={isSelected ? "heart" : "heart-outline"}
            size={32}
            color={"red"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView style={styles.container}>
        {/* Product Image */}
        <Image source={{ uri: product.imageUrl }} style={styles.image} />

        {/* Product Info */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.supplier}>By {product.supplier}</Text>
          <View style={styles.rating}>
            <Text style={styles.price}>${product.price}</Text>
            <View style={styles.ratingStar}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name="star" size={12} color={"gold"} />
              ))}
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>

          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.button}>
            <Ionicons name="cart-outline" size={20} color="white" />
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  detailsHeader: {
    position: "absolute",
    top: 20,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  supplier: {
    fontSize: 16,
    color: "#666",
    marginVertical: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#228B22",
    marginVertical: 8,
  },
  description: {
    fontSize: 18,
    color: "#224241",
    fontWeight: "bold",
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: "#888",
    marginVertical: 4,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#224241",
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingStar: {
    flexDirection: "row",
  },
  ratingText: {
    paddingHorizontal: 4,
    fontSize: 14,
    color: "#224241",
    fontWeight: "bold",
  },
});

export default ProductDetails;
