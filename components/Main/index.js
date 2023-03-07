import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

export default function Main({
  children,
  fullWidth,
  fullHeight,
  hideNavigation,
  hideStatusBar,
  statusBarStyle,
}) {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: fullWidth ? 0 : 30,
          paddingTop: fullHeight ? 0 : 20,
        }}
      >
        {children}
      </View>
      {!hideNavigation && <Navigation />}
      {!hideStatusBar && <StatusBar style={statusBarStyle} />}
    </View>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  hideNavigation: PropTypes.bool,
  hideStatusBar: PropTypes.bool,
  statusBarStyle: PropTypes.oneOf(["auto", "inverted", "light", "dark"]),
};
