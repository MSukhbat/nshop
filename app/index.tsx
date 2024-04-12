import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home page</Text>
      <Link href={"/about/"}>Go to about</Link>
    </View>
  );
}
