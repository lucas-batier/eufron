import { Text, TextInput as ReactNativeTextInput, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function TextInput(props) {
  const theme = useTheme();

  if (props.multiline) {
    if (!props.textAlignVertical) {
      props = { ...props, textAlignVertical: "top" };
    }
    if (!props.placeholder) {
      props = { ...props, placeholder: props.label };
    }
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "flex-end", padding: 16, backgroundColor: theme.colors.surface }}>
      {props.label && !props.multiline && (
        <Text style={{ minWidth: "33%" }}>{props.label}</Text>
      )}
      <ReactNativeTextInput
        style={{ width: "100%" }}
        {...props}
        selectionColor={theme.colors.primary}
      />
    </View>
  );
}
