import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.searchArea}>
          <View style={styles.searchContainer}>
            {/* <Ionicons name="search-outline" size={24} color="#888" /> */}
            <TextInput
              style={styles.searchInput}
              placeholder="What are you looking for?"
              placeholderTextColor="#888"
              onPressIn={() => {}}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.camera}>
              <Ionicons name="search-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  container: {
    width: "100%",
    marginBottom: 20,
  },
  findText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  secondText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#224241",
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
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
    paddingRight:40,
    paddingLeft:20
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
});
