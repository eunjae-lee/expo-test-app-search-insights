import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import aa from "search-insights";

aa("init", {
  appId: "latency",
  apiKey: "6be0576ff61c053d5f9a3225e2a90f76",
});

aa("setUserToken", "this-is-me");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Test"
        onPress={() => {
          aa("clickedObjectIDs", {
            objectIDs: ["a"],
            index: "instant_search_",
            eventName: "my-test-event",
          });
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
