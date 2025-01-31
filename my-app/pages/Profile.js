import { StyleSheet, Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
export default function Profile({ route }) {
  const { user } = route.params;

  return (
    <View>
      <Text>{user.username}</Text>
      <Image source={user.profile_pic} />
    </View>
  );
}
