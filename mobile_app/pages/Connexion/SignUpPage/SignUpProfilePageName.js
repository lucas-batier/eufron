import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  TextInput,
  Button,
  IconButton,
  Text,
  SegmentedButtons,
} from "react-native-paper";
import Layout from "../../../components/Layout";

export default function SignUpProfileName() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [disabled, setDisabled] = useState(true);

  return (
    <Layout
      title="Infos"
      actions={[
        {
          icon: "check",
          label: "Valider",
          disabled: disabled,
          onPress: () => console.log("Sign in actions here @todo"),
        },
      ]}
      onPressBackAction={() => console.log("Back actions here @todo")}
      hideNavigation
    >
      <ScrollView>
        <View style={{ rowGap: 15 }}>
          <View style={{ rowGap: 10 }}>
            <TextInput
              onChangeText={setFirstname}
              value={firstname}
              label="Prénom"
              autoFocus
            />
            <TextInput
              onChangeText={setLastname}
              value={lastname}
              label="Nom"
            />
          </View>
          <Button disabled={disabled} mode="contained" icon="check">
            Valider
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
