import { useContext, useState } from "react";
import { View } from "react-native";
import {
  TextInput,
  Button,
  useTheme,
  IconButton,
  Text,
} from "react-native-paper";
import Layout from "../../../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../context/AuthContext";

export default function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [disabled, setDisabled] = useState(false);

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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.push("ForgotPassword")}
            >
              Mot de passe oublié
            </Text>
            <Button
              mode="contained"
              icon="login-variant"
              disabled={disabled}
              onPress={() => signIn({ email, password })}
            >
              Se connecter
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}
