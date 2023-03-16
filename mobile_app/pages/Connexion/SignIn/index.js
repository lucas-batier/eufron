import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import {
  TextInput,
  Button,
  useTheme,
  IconButton,
  Text,
  HelperText,
  Surface,
} from "react-native-paper";
import Layout from "../../../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../context/AuthContext";

export default function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { signIn, errors } = useContext(AuthContext);

  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    setIsLoading(true);
    signIn({ username: email, password });
  };

  useEffect(() => {
    setIsLoading(false);
  }, [signIn]);

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
          {errors?.non_field_errors?.map((error, id) => (
            <View key={id} style={{ marginLeft: 15 }}>
              <Text style={{ color: theme.colors.error }}>{error}</Text>
            </View>
          ))}
          <View>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              label="Email"
              inputMode="email"
              autoCapitalize="none"
              error={errors?.username}
              autoFocus
            />
            {errors?.username?.map((error, id) => (
              <HelperText key={id} type="error">
                {error}
              </HelperText>
            ))}
          </View>
          <View>
            <TextInput
              onChangeText={onChangePassword}
              value={password}
              label="Mot de passe"
              autoComplete="current-password"
              secureTextEntry
              error={errors?.password}
            />
            {errors?.password?.map((error, id) => (
              <HelperText key={id} type="error">
                {error}
              </HelperText>
            ))}
          </View>
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
              icon={isLoading ? "loading" : "login-variant"}
              disabled={isLoading}
              onPress={handleSignIn}
            >
              Se connecter
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}
