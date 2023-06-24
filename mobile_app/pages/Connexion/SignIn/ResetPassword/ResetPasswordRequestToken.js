import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Button, Text, HelperText } from "react-native-paper";
import { resetPasswordRequestToken } from "../../../../api/authenticate/resetPassword";
import TextInput from "../../../../components/Input/TextInput";
import Layout from "../../../../components/Layout";

export default function ResetPasswordRequestToken() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleResetPasswordRequestToken = () => {
    setIsLoading(true);
    resetPasswordRequestToken({ email }).then((response) => {
      if (response.ok) {
        navigation.navigate("ResetPasswordValidateToken", { email });
      } else {
        response.json().then((errors) => setErrors(errors));
      }
      setIsLoading(false);
    });
  };

  return (
    <Layout hideNavigation>
      <View style={{ rowGap: 16 }}>
        <Text>{t("connexion.signin.reset_password.request_token.title")}</Text>
        <View style={{ marginTop: 8 }}>
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
              placeholder={"jessicabdos@eufron.fr"}
              error={errors?.email}
              autoFocus
            />
            {errors?.email?.map((error, id) => (
              <HelperText key={id} type="error">
                {t(error)}
              </HelperText>
            ))}
          </View>
          <View style={{ marginTop: 8 }}>
            <Button
              mode="contained"
              icon={isLoading ? "loading" : "send"}
              disabled={isLoading}
              onPress={handleResetPasswordRequestToken}
            >
              {t("connexion.signin.reset_password.request_token.form.button")}
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}
