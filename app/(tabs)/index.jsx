import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Welcome from "@/components/home/Welcome";
import Heading from "@/components/home/Heading";
import NewArrival from "@/components/products/NewArrival";
import BudgetPick from "@/components/products/BudgetPick";
import { useDispatch } from "react-redux";
import { loadWishlist } from "@/redux/wishlistSlice";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function HomeScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    dispatch(loadWishlist());
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    let address = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    if (address.length > 0) {
      const { city, region } = address[0];
      setLocation(`${city}, ${region}`);
    } else {
      setLocation("Unknown location");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          {/* Location */}
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.locationText}>
            {location || errorMsg || "Loading location..."}
          </Text>

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
    paddingBottom: 10,
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
    height: 200,
    resizeMode: "cover",
    borderRadius: 12,
  },
});
