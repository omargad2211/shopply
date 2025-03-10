import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchCard from "@/components/products/searchCard";
import { useGetAllProductsQuery } from "@/redux/productsApi";
import { useState } from "react";
import BackgroundImage from "@/assets/images/svgexport-4.png";

export default function Search() {
  const [query, setQuery] = useState("");
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  const searchedProducts =
    products?.filter((product) => {
      const lowerQuery = query.toLowerCase();
      return (
        product.title.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.supplier.toLowerCase().includes(lowerQuery)
      );
    }) || [];

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}

      <View style={styles.wrapper}>
        {/* Search Area */}
        <View style={styles.searchArea}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              value={query}
              placeholder="What are you looking for?"
              placeholderTextColor="#888"
              onChangeText={(text) => setQuery(text)}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.camera}>
              <Ionicons name="search-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {query.trim().length === 0 && (
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={BackgroundImage}
              style={styles.backgroundImage}
            />
          </View>
        )}
        {/* Search Results */}
        {query.trim().length > 0 && (
          <FlatList
            style={styles.flatList}
            data={searchedProducts}
            keyExtractor={(item) =>
              item.id?.toString() || Math.random().toString()
            }
            renderItem={({ item }) => <SearchCard product={item} />}
            contentContainerStyle={{ rowGap: 6, paddingHorizontal: 2 }}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent:"center",
    marginTop: 160, // Adjust this if you need the image higher or lower
  },
  backgroundImage: {
    width: 220,
    height: 220,
    resizeMode: "cover",
  },
  wrapper: {
    padding: 20,
    flex: 1,
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
    borderWidth: 0,
    paddingRight: 40,
    paddingLeft: 20,
  },
  camera: {
    backgroundColor: "#224241",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    position: "absolute",
    bottom: -21,
    left: -45,
  },
  flatList: {
    marginBottom: 100,
  },
});
