import { DefaultTheme } from "react-native-paper";

// Positive: #00BA6A

const defaultTheme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F34213",
    onPrimary: "#FFFFFF",
    primaryContainer: "#F34213",
    onPrimaryContainer: "#061403",
    secondary: "#F89477",
    onSecondary: "#FFFFFF",
    secondaryContainer: "transparent",
    onSecondaryContainer: "#061403",
    tertiary: "#9714AB",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#9714AB",
    onTertiaryContainer: "#061403",
    error: "#D11B3A",
    onError: "#FFFFFF",
    errorContainer: "#D11B3A",
    onErrorContainer: "#061403",
    background: "#EDEDE3",
    onBackground: "#061403",
    surface: "#FFFFFF",
    onSurface: "#061403",
    surfaceVariant: "transparent",
    onSurfaceVariant: "#686F67",
    outline: "#061403",
    outlineVariant: "rgb(192, 201, 0)",
    shadow: "#061403",
    scrim: "#061403",
    inverseSurface: "rgb(0, 255, 46)",
    inverseOnSurface: "rgb(0, 241, 236)",
    inversePrimary: "rgb(58, 225, 135)",
    elevation: {
      level0: "#EDEDE3",
      level1: "#EDEDE3",
      level2: "#EDEDE3",
      level3: "#EDEDE3",
      level4: "#EDEDE3",
      level5: "#EDEDE3",
    },
    surfaceDisabled: "rgba(65, 65, 16, 0.12)",
    onSurfaceDisabled: "rgba(65, 65, 16, 0.38)",
    backdrop: "rgba(43, 50, 44, 0.4)",
  },
};

export const lightTheme = {
  ...defaultTheme,
};
