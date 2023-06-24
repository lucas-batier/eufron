import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  Button,
  Text,
  HelperText,
  useTheme,
} from "react-native-paper";
import {
  resetPasswordRequestToken,
  resetPasswordValidateToken,
} from "../../../../api/authenticate/resetPassword";
import Layout from "../../../../components/Layout";
import { useNavigation, useRoute } from "@react-navigation/native";
import TextInput from "../../../../components/Input/TextInput";

export default function ResetPasswordValidateToken() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();

  const { email } = route.params;

  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleResetPasswordValidateToken = () => {
    setIsLoading(true);
    resetPasswordValidateToken({ token }).then((response) => {
      if (response.ok) {
        navigation.push("ResetPasswordConfirm", { email, token });
      } else {
        response.json().then((errors) => setErrors(errors));
      }
      setIsLoading(false);
    });
  };

  const handleResetPasswordRequestToken = () => {
    setIsLoading(true);
    resetPasswordRequestToken({ email }).then((response) => {
      if (!response.ok) {
        response.json().then((errors) => setErrors(errors));
      }
      setIsLoading(false);
    });
  };

  return (
    <Layout hideNavigation>
      <View style={{ rowGap: 16 }}>
        <Text>{t("connexion.signin.reset_password.validate_token.title")}</Text>
        <View style={{ rowGap: 8, marginTop: 8 }}>
          {errors?.detail && (
            <View style={{ marginBottom: 16 }}>
              <Text style={{ color: theme.colors.error }}>
                {t(errors?.detail)}
              </Text>
            </View>
          )}
          <View>
            <TextInput
              onChangeText={setToken}
              value={token}
              label={t(
                "connexion.signin.reset_password.validate_token.form.token"
              )}
              inputMode="numeric"
              maxLength={6}
              error={errors?.token}
              autoFocus
            />
            {errors?.token?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <View style={{ rowGap: 8, marginTop: 8 }}>
            <Button
              disabled={isLoading}
              onPress={handleResetPasswordRequestToken}
            >
              {t(
                "connexion.signin.reset_password.validate_token.form.button.resend"
              )}
            </Button>
            <Button
              mode="contained"
              icon={isLoading ? "loading" : "arrow-right"}
              disabled={isLoading}
              onPress={handleResetPasswordValidateToken}
            >
              {t(
                "connexion.signin.reset_password.validate_token.form.button.validate"
              )}
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}
