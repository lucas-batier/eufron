import { Text, Button as ReactNativeButton, View } from "react-native";
import { useTheme } from "react-native-paper";
import theme from "../../theme";

export default function TextInput(props) {
  const theme = useTheme();

  return (
    <ReactNativeButton
      style={{ width: "100%" }}
      {...props}
      selectionColor={theme.colors.primary}
    />
  );
}
