import { useNavigation } from "@react-navigation/native";
import { ImageBackground, View } from "react-native";
import { Text, Button, IconButton } from "react-native-paper";
import Main from "../../../components/Main";

export default function LogIn() {
  const navigation = useNavigation();

  const image = {
    uri: "https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg", // @todo store in assets
  };

  return (
    <Main fullWidth fullHeight hideNavigation statusBarStyle="light">
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0, 0.45)",
            justifyContent: "flex-end",
            paddingBottom: 10,
            paddingHorizontal: 30,
          }}
        >
          <Text
            style={{
              color: "#fff",
              marginBottom: 5,
            }}
            variant="headlineMedium"
          >
            Bienvenue
          </Text>
          <Text
            style={{
              color: "#fff",
              marginVertical: 5,
            }}
            variant="bodyLarge"
          >
            Eufron est entre vos mains 👋
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          minHeight: "40%",
          rowGap: 15,
          marginTop: 20,
          marginHorizontal: 30,
        }}
      >
        <Text>Habitué ?</Text>
        <Button
          mode="contained"
          icon="login-variant"
          onPress={() => navigation.push("SignIn")}
        >
          Se connecter
        </Button>
        <Text>Nouvel arrivé ?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton icon="google" mode="contained" size={40} />
          <IconButton icon="facebook" mode="contained" size={40} />
          <IconButton icon="apple" mode="contained" size={40} />
          <IconButton
            icon="email"
            mode="contained"
            size={40}
            onPress={() => navigation.push("SignUp")}
          />
        </View>
      </View>
    </Main>
  );
}
