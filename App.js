import { SafeAreaView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Connexion from "./pages/Connexion";
import SignIn from "./pages/Connexion/SignIn";

export default function App() {
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
        }}
      >
        <SignIn />
      </View>
    </SafeAreaProvider>
  );
}
