import Profile from "./Profile";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import Courses from "./Courses";

const Tab = createMaterialBottomTabNavigator();

export default function Main() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.onSurface}
      shifting={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons name="home" color={color} size={32} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={32}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: "Séances",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons name="calendar" color={color} size={32} />
            ) : (
              <MaterialCommunityIcons
                name="calendar-outline"
                color={color}
                size={32}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Vous",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons name="account" color={color} size={32} />
            ) : (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={32}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
