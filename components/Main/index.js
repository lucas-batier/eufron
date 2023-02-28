import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Main({ children, action, hideNavigation }) {
  console.log(action);
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 30,
        paddingTop: StatusBar.currentHeight,
      }}
    >
        <Header></Header>
      {children}
      <StatusBar style="auto" />
      {!hideNavigation && <Navigation />}
    </View>
  );
}
