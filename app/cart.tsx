import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function CartScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>🛒 Cart Page</Text>
      <Button title="Go to Profile" onPress={() => router.push("/profile")} />
    </View>
  );
}
