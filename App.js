import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUpProfilePage from "./pages/ConnexionPage/SignUpPage/SignUpProfilePage";
import SignInPage from "./pages/ConnexionPage/SignInPage";
import SignUpPage from "./pages/ConnexionPage/SignUpPage";

export default function App() {
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
        }}
      >
        <SignUpProfilePage />
      </View>
    </SafeAreaProvider>
  );
}
