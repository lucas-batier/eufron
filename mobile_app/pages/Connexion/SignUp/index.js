import { useContext, useEffect, useState } from "react";
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
              <Text style={{ color: theme.colors.error }}>{error}</Text>
            </View>
          ))}
          <View>
            <TextInput
              onChangeText={setFirstname}
              value={firstName}
              label="Prénom"
              autoComplete="given-name"
              error={errors?.first_name}
              autoFocus
            />
            {errors?.first_name?.map((error, id) => (
              <HelperText key={id} type="error">
                {error}
              </HelperText>
            ))}
          </View>
          <View>
            <TextInput
              onChangeText={setLastname}
              value={lastName}
              label="Nom"
              autoComplete="family-name"
              error={errors?.last_name}
            />
            {errors?.last_name?.map((error, id) => (
              <HelperText key={id} type="error">
                {error}
              </HelperText>
            ))}
          </View>
          <View>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              label="Email"
              inputMode="email"
              autoCapitalize="none"
              error={errors?.username}
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
              autoComplete="new-password"
              secureTextEntry
              error={errors?.password}
            />
            {errors?.password?.map((error, id) => (
              <HelperText key={id} type="error">
                {error}
              </HelperText>
            ))}
          </View>
          <Button
            mode="contained"
            icon={isLoading ? "loading" : "login-variant"}
            disabled={isLoading}
            onPress={handleSignUp}
          >
            Se connecter
          </Button>
        </View>
      </View>
    </Layout>
  );
}
