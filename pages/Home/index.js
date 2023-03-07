import { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import Main from "../../components/Main";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const { signOut } = useContext(AuthContext);

  return (
    <Main>
      <Button onPress={signOut}>Déconnexion</Button>
    </Main>
  );
}
