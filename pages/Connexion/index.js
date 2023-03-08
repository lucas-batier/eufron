import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Main/Header";
import LogIn from "./LogIn";
import ForgotPassword from "./SignIn/ForgotPassword";
import { Button } from "react-native-paper";

const Stack = createStackNavigator();

export default function Connexion() {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        header: ({ options, navigation }) => {
          return <Header options={options} navigation={navigation} />;
        },
      }}
    >
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{
          title: "Connexion",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Connexion",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Bienvenue",
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: "Mot de passe oublié",
        }}
      />
    </Stack.Navigator>
  );
}
