import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./Header";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

export default function Main({
  children,
  title,
  actions,
  moreActions,
  onPressBackAction,
  fullWidth,
  hideHeader,
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
      {!hideHeader && (
        <Header
          title={title}
          actions={actions}
          moreActions={moreActions}
          onPressBackAction={onPressBackAction}
        />
      )}
      <View
        style={{
          flex: 1,
          paddingHorizontal: fullWidth ? 0 : 30,
          paddingTop: hideHeader ? 0 : 20,
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
  title: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string,
      disabled: PropTypes.bool,
      onPress: PropTypes.func,
    })
  ),
  moreActions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string,
      disabled: PropTypes.bool,
      onPress: PropTypes.func,
    })
  ),
  onPressBackAction: PropTypes.func,
  fullWidth: PropTypes.bool,
  hideNavigation: PropTypes.bool,
  hideStatusBar: PropTypes.bool,
  statusBarStyle: PropTypes.oneOf(["auto", "inverted", "light", "dark"]),
};
