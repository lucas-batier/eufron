import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { TextInput, Button, Text, HelperText } from "react-native-paper";
import { resetPasswordRequestToken } from "../../../../api/authenticate/resetPassword";
import Layout from "../../../../components/Layout";

export default function ResetPasswordRequestToken() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleResetPassword = () => {
    setIsLoading(true);
    resetPasswordRequestToken({ email }).then((response) => {
      if (response.ok) {
        navigation.navigate("ResetPasswordValidateToken");
      } else {
        response.json().then((errors) => setErrors(errors));
      }
      setIsLoading(false);
    });
  };

  return (
    <Layout hideNavigation>
      <View style={{ rowGap: 15 }}>
        <Text>{t("connexion.signin.reset_password.request_token.title")}</Text>
        <View style={{ rowGap: 10, marginTop: 10 }}>
          <View>
            <TextInput
              onChangeText={setEmail}
              value={email}
              label={t(
                "connexion.signin.reset_password.request_token.form.email"
              )}
              inputMode="email"
              autoCapitalize="none"
              autoComplete="email"
              error={errors?.email}
              autoFocus
            />
            {errors?.email?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <View>
            <Button
              mode="contained"
              icon={isLoading ? "loading" : "send"}
              disabled={isLoading}
              onPress={handleResetPassword}
            >
              {t("connexion.signin.reset_password.request_token.form.button")}
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}
