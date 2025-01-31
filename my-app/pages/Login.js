import { useState } from "react";
import { StyleSheet, Image, ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

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
        />
        <TextInput
          mode="outlined"
          label={"password"}
          value={password}
          style={styles.textInput}
        />
        <Button mode="contained" style={styles.button}>
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
  eyeIcon: {
    position: "absolute",
    right: 57,
    top: 95,
    color: "gray",
  },
  previewText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  errorContainer: {
    backgroundColor: "pink",
    width: 350,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
  },

  errorContent: {
    fontSize: 16,
  },
  infoIcon: {
    fontSize: 18,
    marginRight: 5,
  },
});
