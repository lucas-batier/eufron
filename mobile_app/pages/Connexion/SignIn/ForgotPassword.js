import { useEffect, useState } from "react";
import { View } from "react-native";
import { TextInput, Button, useTheme, Text } from "react-native-paper";
import Layout from "../../../components/Layout";

export default function ForgotPassword() {
  const [email, onChangeEmail] = useState("");
  const { forgotPassword, errors } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = () => {
    setIsLoading(true);
    console.log("handle forgot password");
  };

  useEffect(() => {
    setIsLoading(false);
  }, [forgotPassword]);

  const theme = useTheme();

  return (
    <Layout hideNavigation>
      <View style={{ rowGap: 15 }}>
        <Text>{t("connexion.signin.forgot_password.title")}</Text>
        <View style={{ rowGap: 10, marginTop: 10 }}>
          <View>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              label={t("connexion.signin.forgot_password.form.email")}
              inputMode="email"
              autoCapitalize="none"
              autoComplete="email"
              error={errors?.username}
              autoFocus
            />
            {errors?.username?.map((error, id) => (
              <HelperText key={id} type="error">
                {error}
              </HelperText>
            ))}
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Button
              mode="contained"
              icon={isLoading ? "loading" : "send"}
              disabled={isLoading}
              onPress={handleForgotPassword}
            >
              {t("connexion.signin.forgot_password.form.button")}
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}
