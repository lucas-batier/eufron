import { useContext, useState } from "react";
import { View } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import Main from "../../../components/Main";
import { AuthContext } from "../../../context/AuthContext";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);

  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const [disabled, setDisabled] = useState(false);

  return (
    <Main hideNavigation>
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
          <Button
            mode="contained"
            icon="login-variant"
            disabled={disabled}
            onPress={() => signUp({ email, password })}
          >
            Se connecter
          </Button>
        </View>
      </View>
    </Main>
  );
}
