import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextInput, Button, IconButton, Text } from "react-native-paper";
import Main from "../../../components/Main";
import DateTimePickerInput from "../../../components/Input/DateTimePickerInput";

export default function SignUpProfilePage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [disabled, setDisabled] = useState(true);

  return (
    <Main
      title="Tes infos"
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
        <View style={{ rowGap: 15, marginTop: 20 }}>
          <View style={{ rowGap: 10 }}>
            <TextInput
              onChangeText={setFirstname}
              value={firstname}
              placeholder="Prénom"
              autoFocus
            />
            <TextInput
              onChangeText={setLastname}
              value={lastname}
              placeholder="Nom"
            />
          </View>
          <Text>Plus d'infos ?</Text>
          <View style={{ rowGap: 10 }}>
            <DateTimePickerInput
              label="Anniversaire"
              placeholder="20/04/2000"
              mode="date"
              maximumDate={new Date(new Date().getFullYear(), 12, 31)}
              date={birthdate}
              onChange={setBirthdate}
            />
            <TextInput
              onChangeText={setGender}
              value={gender}
              label="Genre"
              placeholder="Femme"
            />
            <TextInput
              onChangeText={setHeight}
              value={height}
              label="Taille (cm)"
              placeholder="167 cm"
              inputMode="decimal"
            />
            <TextInput
              onChangeText={setWeight}
              value={weight}
              label="Poids (kg)"
              placeholder="56 kg"
              inputMode="decimal"
            />
          </View>
          <Button mode="contained" icon="check">
            Valider
          </Button>
        </View>
      </ScrollView>
    </Main>
  );
}
