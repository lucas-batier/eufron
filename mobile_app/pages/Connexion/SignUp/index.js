import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  TextInput,
  Button,
  IconButton,
  HelperText,
  Text,
  useTheme,
} from "react-native-paper";
import Layout from "../../../components/Layout";
import { AuthContext } from "../../../context/AuthContext";

export default function SignUp() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { signUp, errors } = useContext(AuthContext);

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    setIsLoading(true);
    signUp({ firstName, lastName, username: email, password });
  };

  useEffect(() => {
    setIsLoading(false);
  }, [signUp]);

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
          {errors?.non_field_errors?.map((error, id) => (
            <View key={id} style={{ marginLeft: 15 }}>
              <Text style={{ color: theme.colors.error }}>{t(error)}</Text>
            </View>
          ))}
          <View>
            <TextInput
              onChangeText={setFirstname}
              value={firstName}
              label={t("connexion.signup.form.first_name")}
              autoComplete="given-name"
              error={t(errors?.first_name)}
              autoFocus
            />
            {errors?.first_name?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <View>
            <TextInput
              onChangeText={setLastname}
              value={lastName}
              label={t("connexion.signup.form.last_name")}
              autoComplete="family-name"
              error={t(errors?.last_name)}
            />
            {errors?.last_name?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <View>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              label={t("connexion.signup.form.email")}
              inputMode="email"
              autoCapitalize="none"
              error={t(errors?.username)}
            />
            {errors?.username?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <View>
            <TextInput
              onChangeText={onChangePassword}
              value={password}
              label={t("connexion.signup.form.password")}
              autoComplete="new-password"
              secureTextEntry
              error={t(errors?.password)}
            />
            {errors?.password?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <Button
            mode="contained"
            icon={isLoading ? "loading" : "login-variant"}
            disabled={isLoading}
            onPress={handleSignUp}
          >
            {t("connexion.signup.form.button")}
          </Button>
        </View>
      </View>
    </Layout>
  );
}
