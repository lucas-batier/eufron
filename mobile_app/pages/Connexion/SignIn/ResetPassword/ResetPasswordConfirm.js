import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  TextInput,
  Button,
  Text,
  HelperText,
  useTheme,
} from "react-native-paper";
import { resetPasswordConfirmReset } from "../../../../api/authenticate/resetPassword";
import Layout from "../../../../components/Layout";
import { AuthContext } from "../../../../context/AuthContext";
import { useRoute } from "@react-navigation/native";

export default function ResetPasswordConfirm() {
  const { t } = useTranslation();
  const theme = useTheme();
  const route = useRoute();
  const { signIn } = useContext(AuthContext);

  const { email, token } = route.params;

  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleResetPasswordConfirm = () => {
    setIsLoading(true);
    resetPasswordConfirmReset({ token, password }).then((response) => {
      if (response.ok) {
        signIn({ username: email, password });
      } else {
        response.json().then((errors) => setErrors(errors));
      }
      setIsLoading(false);
    });
  };

  return (
    <Layout hideNavigation>
      <View style={{ rowGap: 15 }}>
        <Text>{t("connexion.signin.reset_password.confirm.title")}</Text>
        <View style={{ rowGap: 10, marginTop: 10 }}>
          {errors?.non_field_errors && (
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: theme.colors.error }}>
                {t(errors?.detail)}
              </Text>
            </View>
          )}
          <View>
            <TextInput
              onChangeText={setPassword}
              value={password}
              label={t("connexion.signin.reset_password.confirm.form.password")}
              autoComplete="new-password"
              secureTextEntry
              error={errors?.password}
            />
            {errors?.password?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              mode="contained"
              icon={isLoading ? "loading" : "check"}
              disabled={isLoading}
              onPress={handleResetPasswordConfirm}
            >
              {t("connexion.signin.reset_password.confirm.form.button")}
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}