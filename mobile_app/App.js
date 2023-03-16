import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Connexion from "./pages/Connexion";
import Loading from "./pages/Loading";
import { useEffect, useMemo, useReducer } from "react";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/Layout/Header";
import Main from "./pages/Main";
import { theme } from "./theme";
import { signin, signup } from "./api/authenticate";
import * as SecureStore from "expo-secure-store";

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            errors: action.errors,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            errors: action.errors,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            errors: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      errors: null,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      userToken = await SecureStore.getItemAsync("userToken");

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        let userToken;
        const response = await signin(data);
        if (response.ok) {
          const data = await response.json();
          userToken = await SecureStore.setItemAsync("userToken", data.token);

          dispatch({ type: "SIGN_IN", token: userToken, errors: null });
        } else {
          const errors = await response.json();
          dispatch({ type: "SIGN_IN", token: null, errors: errors });
        }
      },
      signOut: () => {
        SecureStore.deleteItemAsync("userToken");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        let userToken;
        const response = await signup(data);

        if (response.ok) {
          const data = await response.json();
          userToken = await SecureStore.setItemAsync("userToken", data.token);

          dispatch({ type: "SIGN_IN", token: userToken, errors: null });
        } else {
          const errors = await response.json();
          dispatch({ type: "SIGN_IN", token: null, errors: errors });
        }
      },
      errors: state.errors,
    }),
    [state.errors]
  );

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                header: ({ options, navigation }) => {
                  return <Header options={options} navigation={navigation} />;
                },
              }}
            >
              {state.isLoading ? (
                <Stack.Screen
                  name="Loading"
                  options={{
                    title: "Chargement",
                    presentation: "transparentModal",
                    headerShown: false,
                  }}
                  component={Loading}
                />
              ) : state.userToken === null ? (
                <Stack.Screen
                  name="Connexion"
                  component={Connexion}
                  options={{
                    title: "Connexion",
                    presentation: "transparentModal",
                    headerShown: false,
                  }}
                />
              ) : (
                <Stack.Screen
                  name="Main"
                  options={{
                    title: "Eufron",
                    presentation: "transparentModal",
                  }}
                  component={Main}
                />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}
