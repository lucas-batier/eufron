import { Appbar, Button, Text, useTheme } from "react-native-paper";
import PropTypes from "prop-types";

export default function Header({
  title,
  actions,
  moreActions,
  onPressBackAction,
}) {
  const theme = useTheme();
  const _handleMore = () => console.log("Handle more @todo");

  return (
    <Appbar.Header>
      {onPressBackAction && (
        <Appbar.Action
          icon="chevron-left"
          color={theme.colors.primary}
          size={32}
          onPress={onPressBackAction}
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
};
