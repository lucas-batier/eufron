import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  TextInput,
  Button,
  Text,
  HelperText,
  useTheme,
} from "react-native-paper";
import { resetPasswordValidateToken } from "../../../../api/authenticate/resetPassword";
import Layout from "../../../../components/Layout";

export default function ResetPasswordValidateToken() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [token, onChangeToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleResetPasswordValidateToken = () => {
    setIsLoading(true);
    resetPasswordValidateToken({ token }).then((response) => {
      if (response.ok) {
        navigation.push("ResetPasswordConfirm", { token });
      } else {
        response.json().then((errors) => setErrors(errors));
      }
      setIsLoading(false);
    });
  };

  return (
    <Layout hideNavigation>
      <View style={{ rowGap: 15 }}>
        <Text>{t("connexion.signin.reset_password.validate_token.title")}</Text>
        <View style={{ rowGap: 10, marginTop: 10 }}>
          {errors?.detail && (
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: theme.colors.error }}>
                {t(errors?.detail)}
              </Text>
            </View>
          )}
          <View>
            <TextInput
              onChangeText={onChangeToken}
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
          <View>
            <Button
              mode="contained"
              icon={isLoading ? "loading" : "arrow-right"}
              disabled={isLoading}
              onPress={handleResetPasswordValidateToken}
            >
              {t("connexion.signin.reset_password.validate_token.form.button")}
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}
