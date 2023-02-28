import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  TextInput,
  Text,
  Button,
  Divider,
  useTheme,
  IconButton,
} from "react-native-paper";
import Main from "../../../components/Main";

export default function SignIn() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const theme = useTheme();

  return (

    <Main action={console.log("Sign in action here")} hideNavigation>
      <View style={styles.layoutForm}>
        <View style={styles.oauth}>
          <IconButton icon="google" mode="contained" size={48} />
          <IconButton icon="facebook" mode="contained" size={48} />
          <IconButton icon="apple" mode="contained" size={48} />
        </View>
        <View style={styles.formInput}>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            inputMode="email"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Mot de passe"
            secureTextEntry
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button textColor={theme.colors.secondary}>
              Mot de passe oublié
            </Button>
            <Button mode="contained">Connexion</Button>
          </View>
        </View>
        <Button
          mode="contained"
          buttonColor={theme.colors.secondary}
          textColor={theme.colors.onSecondary}
        >
          Créer un compte
        </Button>
      </View>
    </Main>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  logo: {
    resizeMode: "contain",
    height: 100,
    marginVertical: 30,
  },
  title: {},
  layoutForm: {
    flex: 1,
    justifyContent: "space-around",
  },
  formInput: {
    rowGap: 20,
  },
  oauth: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
