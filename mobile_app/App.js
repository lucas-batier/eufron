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

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
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
                    title: "Loading",
                    presentation: "transparentModal",
                    headerShown: false,
                  }}
                  component={Loading}
                />
              ) : state.userToken == null ? (
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
