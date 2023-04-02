import { DefaultTheme } from "react-native-paper";

// positive #00A675

const defaultTheme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F34213",
    onPrimary: "#FDFDF7",
    primaryContainer: "#F34213",
    onPrimaryContainer: "#061403",
    secondary: "#F89477",
    onSecondary: "#FDFDF7",
    secondaryContainer: "transparent",
    onSecondaryContainer: "#061403",
    tertiary: "#00C972",
    onTertiary: "#FDFDF7",
    tertiaryContainer: "#00C972",
    onTertiaryContainer: "#061403",
    error: "#D11B3A",
    onError: "#FDFDF7",
    errorContainer: "#D11B3A",
    onErrorContainer: "#061403",
    background: "#FDFDF7",
    onBackground: "#061403",
    surface: "#FDFDF7",
    onSurface: "#061403",
    surfaceVariant: "transparent",
    onSurfaceVariant: "#31432D",
    outline: "#061403",
    outlineVariant: "rgb(192, 201, 0)",
    shadow: "#061403",
    scrim: "#061403",
    inverseSurface: "rgb(0, 255, 46)",
    inverseOnSurface: "rgb(0, 241, 236)",
    inversePrimary: "rgb(58, 225, 135)",
    elevation: {
      level0: "#FDFDF7",
      level1: "#FDFDF7",
      level2: "#FDFDF7",
      level3: "#FDFDF7",
      level4: "#FDFDF7",
      level5: "#FDFDF7",
    },
    surfaceDisabled: "rgba(65, 65, 16, 0.12)",
    onSurfaceDisabled: "rgba(65, 65, 16, 0.38)",
    backdrop: "rgba(43, 50, 44, 0.4)",
  },
};

export const lightTheme = {
  ...defaultTheme,
};
