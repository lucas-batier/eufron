import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import {
  TextInput,
  Button,
  useTheme,
  IconButton,
  Text,
  HelperText,
} from "react-native-paper";
import Layout from "../../../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigation = useNavigation();
  const { signIn, errors } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [signIn]);

  const handleSignIn = () => {
    setIsLoading(true);
    signIn({ username: email, password });
  };

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
              <Text style={{ color: theme.colors.error }}>{t(error)}</Text>
            </View>
          ))}
          <View>
            <TextInput
              onChangeText={setEmail}
              value={email}
              label={t("connexion.signin.form.email")}
              inputMode="email"
              autoCapitalize="none"
              error={errors?.username}
              autoFocus
            />
            {errors?.username?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <View>
            <TextInput
              onChangeText={setPassword}
              value={password}
              label={t("connexion.signin.form.password")}
              autoComplete="current-password"
              secureTextEntry
              error={errors?.password}
            />
            {errors?.password?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <View style={{ rowGap: 10, marginTop: 10 }}>
            <Button
              disabled={isLoading}
              onPress={() => navigation.push("ResetPassword")}
            >
              {t("connexion.signin.form.button.reset_password")}
            </Button>
            <Button
              mode="contained"
              icon={isLoading ? "loading" : "login-variant"}
              disabled={isLoading}
              onPress={handleSignIn}
            >
              {t("connexion.signin.form.button.signin")}
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}
