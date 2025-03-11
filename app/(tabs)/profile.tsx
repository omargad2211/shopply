import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  const user = {
    name: "Omar Ahmed",
    email: "omar.ahmed@example.com",
    phone: "+20 123 456 789",
    imageUrl: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.infoCard}>
        <Ionicons name="call" size={22} color="#224241" />
        <Text style={styles.infoText}>{user.phone}</Text>
      </View>

      <View style={styles.infoCard}>
        <Feather name="mail" size={22} color="#224241" />
        <Text style={styles.infoText}>{user.email}</Text>
      </View>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push("/wishlist")}
      >
        <Ionicons name="heart-outline" size={24} color="#224241" />
        <Text style={styles.menuText}>Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push("/cart")}
      >
        <Ionicons name="cart-outline" size={24} color="#224241" />
        <Text style={styles.menuText}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push("/orders")}
      >
        <Ionicons name="file-tray-full-outline" size={24} color="#224241" />
        <Text style={styles.menuText}>Order History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push("/settings")}
      >
        <Ionicons name="settings-outline" size={24} color="#224241" />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>
{/* 
      <TouchableOpacity
        style={[styles.button, styles.editButton]}
        onPress={() => router.push("/edit-profile")}
      >
        <Feather name="edit" size={22} color="#224241" />
        <Text style={[styles.buttonText, styles.editButtonText]}>
          Edit Profile
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Ionicons name="log-out-outline" size={22} color="#FF4D4D" />
        <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#224241",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 12,
    color: "#224241",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#224241",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#EAF7F5",
  },
  editButtonText: {
    color: "#224241",
  },
  logoutButton: {
    backgroundColor: "#FFECEC",
  },
  logoutText: {
    color: "#FF4D4D",
  },
});
