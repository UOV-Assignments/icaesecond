import { useState, useEffect } from "react";
import { StyleSheet, Image, ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { students } from "../assets/data/studentdb";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigation();

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        alert("Please fill all fields");
        return;
      } else {
        const user = students.find((s) => s.username === username);
        if (!user) {
          alert("Invalid username or password");
          return;
        } else {
          if (user.password === password) {
            await AsyncStorage.setItem("username", username);
            await AsyncStorage.setItem("password", password);

            alert("Login successful");
            navigator.navigate("Home", { user: user });
          } else {
            alert("Invalid username or password");
          }
        }
      }
    } catch (error) {
      console.error("Error saving credentials:", error);
    }
  };

  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: "https://vau.ac.lk/wp-content/uploads/2021/07/cropped-UoV_Logo.png",
          }}
          style={styles.banner}
        />
      </View>

      <View>
        <Text style={styles.heading}>Student Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label={"username"}
          value={username}
          style={styles.textInput}
          onChangeText={setUsername}
        />
        <TextInput
          mode="outlined"
          label={"password"}
          value={password}
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Button mode="contained" style={styles.button} onPress={handleLogin}>
          Login
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 40,
    width: "100%",
  },
  textInput: {
    width: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    width: 300,
    borderRadius: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
