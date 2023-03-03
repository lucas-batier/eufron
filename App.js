import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignInPage from "./pages/ConnexionPage/SignInPage";
import SignUpPage from "./pages/ConnexionPage/SignUpPage";
import SignUpProfilePageDetails from "./pages/ConnexionPage/SignUpPage/SignUpProfilePageDetails";
import SignUpProfilePageName from "./pages/ConnexionPage/SignUpPage/SignUpProfilePageName";

export default function App() {
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
        }}
      >
        <SignUpProfilePageName />
      </View>
    </SafeAreaProvider>
  );
}
