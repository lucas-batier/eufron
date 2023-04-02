import { useNavigation } from "@react-navigation/native";
import { ImageBackground, View } from "react-native";
import { Text, Button, IconButton } from "react-native-paper";
import Layout from "../../../components/Layout";
import { useTranslation } from "react-i18next";

export default function LogIn() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <Layout fullWidth hideNavigation statusBarStyle="light">
      <ImageBackground
        source={require("../../../assets/login-page.jpeg")}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0, 0.45)",
            justifyContent: "flex-end",
            paddingBottom: 10,
            paddingHorizontal: 30,
          }}
        >
          <Text
            style={{
              color: "#fff",
              marginBottom: 5,
            }}
            variant="headlineMedium"
          >
            {t("connexion.login.welcome")}
          </Text>
          <Text
            style={{
              color: "#fff",
              marginVertical: 5,
            }}
            variant="bodyLarge"
          >
            {t("connexion.login.message")}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          minHeight: "40%",
          rowGap: 15,
          marginTop: 20,
          marginHorizontal: 30,
        }}
      >
        <Text>{t("connexion.login.signin.title")}</Text>
        <Button
          mode="contained"
          icon="login-variant"
          onPress={() => navigation.push("SignIn")}
        >
          {t("connexion.login.signin.button")}
        </Button>
        <Text>{t("connexion.login.signup.title")}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton icon="google" mode="contained" size={40} />
          <IconButton icon="facebook" mode="contained" size={40} />
          <IconButton icon="apple" mode="contained" size={40} />
          <IconButton
            icon="email"
            mode="contained"
            size={40}
            onPress={() => navigation.push("SignUp")}
          />
        </View>
      </View>
    </Layout>
  );
}
