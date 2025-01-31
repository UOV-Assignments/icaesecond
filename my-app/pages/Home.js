import { StyleSheet, Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import Courses from "./Courses";
import Subjects from "./Subjects";
export default function Home({ route }) {
  const { user } = route.params;
  console.log(user);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "Courses") {
            iconName = "school";
          } else if (route.name === "Subjects") {
            iconName = "book";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ user: user }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        initialParams={{ user: user }}
      />
      <Tab.Screen name="Subjects" component={Subjects} />
    </Tab.Navigator>
  );
}
