import { useContext, useState } from "react";
import { View } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import Layout from "../../../components/Layout";
import { AuthContext } from "../../../context/AuthContext";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const [disabled, setDisabled] = useState(false);

  // @todo start another stack with action through header

  return (
    <Layout hideNavigation>
      <View
        style={{
          rowGap: 15,
        }}
      >
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
            onChangeText={setFirstname}
            value={firstName}
            label="Prénom"
            autoComplete="given-name"
            autoFocus
          />
          <TextInput
            onChangeText={setLastname}
            value={lastName}
            label="Nom"
            autoComplete="family-name"
          />
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            label="Email"
            inputMode="email"
            autoCapitalize="none"
          />
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            label="Mot de passe"
            autoComplete="new-password"
            secureTextEntry
          />
          <Button
            mode="contained"
            icon="login-variant"
            disabled={disabled}
            onPress={() =>
              signUp({ firstName, lastName, username: email, password })
            }
          >
            Se connecter
          </Button>
        </View>
      </View>
    </Layout>
  );
}
