import { View } from "react-native";
import { ActivityIndicator, useTheme } from "react-native-paper";

export default function Loading() {
  const theme = useTheme();

  // @todo manage theming for status bar
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator animating={true} color={theme.colors.primary} size="large" />
    </View>
  );
}
