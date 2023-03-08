import { Appbar, useTheme } from "react-native-paper";
import PropTypes from "prop-types";

export default function Header({ options, navigation }) {
  const theme = useTheme();

  const { title, rightActions } = options;

  return (
    <Appbar.Header>
      {navigation.canGoBack() && (
        <Appbar.Action
          icon="chevron-left"
          color={theme.colors.primary}
          size={32}
          onPress={navigation.goBack}
        />
      )}
      <Appbar.Content title={title} />
      {rightActions?.map((action, index) => (
        <Appbar.Action
          key={index}
          icon={action.icon}
          color={theme.colors.primary}
          size={32}
          disabled={action.disabled}
          onPress={action.onPress}
        />
      ))}
    </Appbar.Header>
  );
}

Header.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string,
    rightActions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.string,
        disabled: PropTypes.bool,
        onPress: PropTypes.func,
      })
    ),
  }),
  navigation: PropTypes.any,
};
