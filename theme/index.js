import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
  },
};
