import { StyleSheet, Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { courses } from "../assets/data/studentdb";
export default function Courses({ route }) {
  const { user } = route.params;
  console.log(user);
  const course = courses.find((c) => c.id === user.course_id);
  console.log(course);
  return (
    <ScrollView>
      <View>
        <Text>courses</Text>
      </View>
    </ScrollView>
  );
}
