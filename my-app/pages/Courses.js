import { StyleSheet, Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { courses, marks, subjects } from "../assets/data/studentdb";
export default function Courses({ route }) {
  const { user } = route.params;
  console.log(user);
  const course = courses.find((c) => c.id === user.id);
  const subs = subjects.filter((s) => s.course_id === course.id);
  const marks1 = marks.filter((m) => m.student_id === user.id);

  let marksArr = { total: 0, count: 0 };
  marks1.forEach((m) => {
    marksArr.total += m.marks;
    marksArr.count++;
  });
  const avg = marksArr.total / marksArr.count;

  console.log(avg, marksArr.count);

  return (
    <ScrollView>
      <View>
        <Text>courses</Text>
      </View>
    </ScrollView>
  );
}
