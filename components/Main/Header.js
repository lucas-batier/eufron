import { Appbar, useTheme } from "react-native-paper";
import PropTypes from "prop-types";

export default function Header({ options, navigation }) {
  const theme = useTheme();

  const { title, actions, moreActions } = options;

  const _handleMore = () => console.log("Handle more @todo");

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
      {actions?.map((action, index) => (
        <Appbar.Action
          key={index}
          icon={action.icon}
          color={theme.colors.primary}
          size={32}
          disabled={action.disabled}
          onPress={action.onPress}
        />
      ))}
      {moreActions && (
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      )}
    </Appbar.Header>
  );
}

Header.propTypes = {
  options: PropTypes.shape({
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
  }),
  navigation: PropTypes.any,
};
