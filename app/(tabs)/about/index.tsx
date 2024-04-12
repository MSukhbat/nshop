import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About page</Text>
      <Link href={"/"}>Go to index page</Link>
    </View>
  );
}
