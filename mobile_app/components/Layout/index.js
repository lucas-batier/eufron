import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import PropTypes from "prop-types";

export default function Layout({
  children,
  fullWidth,
  fullHeight,
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
          paddingHorizontal: fullWidth ? 0 : 32,
          paddingTop: fullHeight ? 0 : 32,
        }}
      >
        {children}
      </View>
      {!hideStatusBar && <StatusBar style={statusBarStyle} />}
    </View>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  hideStatusBar: PropTypes.bool,
  statusBarStyle: PropTypes.oneOf(["auto", "inverted", "light", "dark"]),
};
