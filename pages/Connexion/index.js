import { StatusBar } from "expo-status-bar";
import { ImageBackground, View } from "react-native";
import { Text, Button, useTheme, IconButton } from "react-native-paper";

export default function Connexion() {
  const theme = useTheme();

  const image = {
    uri: "https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg",
  };

  return (
    <View style={{ flex: 1 }}>
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
            backgroundColor: "rgba(0,0,0, 0.40)",
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
            variant="titleLarge"
          >
            Bienvenue
          </Text>
          <Text
            style={{
              color: "#fff",
              marginVertical: 5,
            }}
          >
            Vous êtes à quelque pas de Eufron
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          minHeight: "30%",
          rowGap: 15,
          marginTop: 20,
          marginHorizontal: 30,
        }}
      >
        <Text>Habitué ?</Text>
        <Button mode="contained">Se connecter</Button>
        <Text>Nouvel arrivé ?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton icon="google" mode="contained" size={32} />
          <IconButton icon="facebook" mode="contained" size={32} />
          <IconButton icon="apple" mode="contained" size={32} />
          <IconButton icon="email" mode="contained" size={32} />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
