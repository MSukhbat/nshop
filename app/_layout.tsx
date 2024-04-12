import { Text, View } from "react-native";
import Constants from "expo-constants";
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="product/[id]" />
      </Stack>
    </View>
  );
}
