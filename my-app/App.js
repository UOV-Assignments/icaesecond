import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./pages/Login";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#333",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTitleStyle: {
                color: "white",
                fontSize: 26,
                fontWeight: "bold",
                fontFamily: "Poppins_600SemiBold",
              },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
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
