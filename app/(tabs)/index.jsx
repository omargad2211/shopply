import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Welcome from "@/components/home/Welcome";
import Heading from "@/components/home/Heading";
import NewArrival from "@/components/products/NewArrival";
import BudgetPick from "@/components/products/BudgetPick";
// import Carousel from "@/components/home/Carousel";
// import Carousel from "@/components/home/Carousel";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          {/* Location */}
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.locationText}>Mit Ghamer, Mansoura</Text>

          {/* Cart Icon with Badge */}
          <View style={styles.cartContainer}>
            <View style={styles.cartCount}>
              <Text style={styles.cartCountText}>8</Text>
            </View>
            <TouchableOpacity onPress={() => router.push("/cart")}>
              <Ionicons name="bag-outline" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <Welcome />
        {/* <Carousel /> */}
        <Image
          source={require("@/assets/images/home.jpg")}
          style={styles.fullWidthImage}
        />

        <Heading title={"New Arrivals"} />
        <NewArrival />
        <Heading title={"Budget Picks"} />
        <BudgetPick />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
  },
  appBarWrapper: {
    marginTop: 10,
    paddingBottom:10
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "500",
    color: "gray",
  },
  cartContainer: {
    position: "relative",
  },
  cartCount: {
    position: "absolute",
    top: -8,
    right: -8,
    height: 18,
    width: 18,
    backgroundColor: "#A8866B",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  cartCountText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  fullWidthImage: {
    width: "100%",
    height: 200, // Adjust as needed
    resizeMode: "cover",
    borderRadius: 12,
  },
});
