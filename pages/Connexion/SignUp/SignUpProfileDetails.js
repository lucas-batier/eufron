import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextInput, Button, SegmentedButtons, Text } from "react-native-paper";
import Main from "../../../components/Main";
import DateTimePickerInput from "../../../components/Input/DateTimePickerInput";

export default function SignUpProfileDetails() {
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [disabled, setDisabled] = useState(true);

  return (
    <Main
      title="Infos"
      hideNavigation
    >
      <ScrollView>
        <View style={{ rowGap: 15 }}>
          <View style={{ rowGap: 10 }}>
            <View style={{ rowGap: 5 }}>
              <Text>Genre</Text>
              <SegmentedButtons
                value={gender}
                onValueChange={setGender}
                buttons={[
                  { value: "F", label: "Femme" },
                  { value: "M", label: "Homme" },
                  { value: "", label: "Autres" },
                ]}
              />
            </View>
            <DateTimePickerInput
              label="Anniversaire"
              mode="date"
              maximumDate={new Date(new Date().getFullYear(), 12, 31)}
              date={birthdate}
              onChange={setBirthdate}
            />
            <TextInput
              onChangeText={setHeight}
              value={height}
              label="Taille (cm)"
              inputMode="decimal"
            />
            <TextInput
              onChangeText={setWeight}
              value={weight}
              label="Poids (kg)"
              inputMode="decimal"
            />
          </View>
          <Button disabled={disabled} mode="contained" icon="arrow-right">
            Continuer
          </Button>
        </View>
      </ScrollView>
    </Main>
  );
}
