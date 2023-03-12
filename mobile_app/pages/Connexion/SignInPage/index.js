import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, useTheme, IconButton } from "react-native-paper";
import Layout from "../../../components/Layout";
import PropTypes from "prop-types";

export default function SignIn({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const [disabled, setDisabled] = useState(true);

  const theme = useTheme();

  return (
    <Layout hideNavigation>
      <View style={{ rowGap: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton icon="google" mode="contained" size={40} />
          <IconButton icon="facebook" mode="contained" size={40} />
          <IconButton icon="apple" mode="contained" size={40} />
        </View>
        <View style={{ rowGap: 10, marginTop: 10 }}>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            label="Email"
            inputMode="email"
            autoFocus
          />
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            label="Mot de passe"
            secureTextEntry
          />
          <View style={{ flexDirection: "row" }}>
            <Button mode="text" textColor={theme.colors.primary}>
              Mot de passe oublié
            </Button>
            <Button
              mode="contained"
              icon="login-variant"
              onPress={() => navigation.push("SignUp")}
            >
              Se connecter
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.any,
};
