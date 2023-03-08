import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, useTheme, Text } from "react-native-paper";
import Main from "../../../components/Main";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPassword() {
  const [email, onChangeEmail] = useState("");

  const [disabled, setDisabled] = useState(true);

  const theme = useTheme();

  return (
    <Main hideNavigation>
      <View style={{ rowGap: 15 }}>
        <Text>Recevez un lien de réinitialisation par mail</Text>
        <View style={{ rowGap: 10, marginTop: 10 }}>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            label="Email"
            inputMode="email"
            autoFocus
          />
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Button
              mode="contained"
              icon="send"
              disabled={disabled}
              onPress={() => console.log("handle forget password")}
            >
              Envoyer
            </Button>
          </View>
        </View>
      </View>
    </Main>
  );
}
