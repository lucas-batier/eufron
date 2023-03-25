import { createStackNavigator } from "@react-navigation/stack";
import ResetPasswordRequestToken from "./ResetPasswordRequestToken";
import ResetPasswordValidateToken from "./ResetPasswordValidateToken";

const Stack = createStackNavigator();

export default function ResetPassword() {
  return (
    <Stack.Navigator
      initialRouteName="ResetPasswordRequestToken"
      screenOptions={{
        header: ({ options, navigation }) => {
          return <Header options={options} navigation={navigation} />;
        },
      }}
    >
      <Stack.Screen
        name="ResetPasswordRequestToken"
        component={ResetPasswordRequestToken}
        options={{
          title: "Mot de passe oublié",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResetPasswordValidateToken"
        component={ResetPasswordValidateToken}
        options={{
          title: "Code de réinitialisation",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
