import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, View } from "react-native";
import {
  Button,
  SegmentedButtons,
  TextInput,
  useTheme,
} from "react-native-paper";
import DateTimePickerInput from "../../../components/Input/DateTimePickerInput";
import Layout from "../../../components/Layout";
import { AuthContext } from "../../../context/AuthContext";
import DropDown from "react-native-paper-dropdown";


export default function Profile() {
  const { t } = useTranslation();
  const theme = useTheme();

  const { signOut } = useContext(AuthContext);

  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState({});
  const [showGenderDropDown, setShowGenderDropDown] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <Layout>
      <ScrollView>
        <View style={{ rowGap: 15 }}>
          <View style={{ rowGap: 10 }}>
            <TextInput
              onChangeText={setFirstName}
              value={firstName}
              label={t("main.profile.form.first_name")}
              autoComplete="given-name"
              textColor={theme.colors.onSurface}
            />
            <TextInput
              onChangeText={setLastName}
              value={lastName}
              label={t("main.profile.form.last_name")}
              autoComplete="family-name"
              textColor={theme.colors.onSurface}
            />
            <DropDown
              label={t("main.profile.form.gender.title")}
              mode="flat"
              visible={showGenderDropDown}
              showDropDown={() => setShowGenderDropDown(true)}
              onDismiss={() => setShowGenderDropDown(false)}
              value={gender}
              inputProps={{textColor: theme.colors.onSurface}}
              setValue={setGender}
              list={[
                {
                  value: "female",
                  label: t("main.profile.form.gender.choices.female"),
                },
                {
                  value: "male",
                  label: t("main.profile.form.gender.choices.male"),
                },
                {
                  value: "other",
                  label: t("main.profile.form.gender.choices.others"),
                },
              ]}
            />
            <DateTimePickerInput
              label={t("main.profile.form.birthdate")}
              mode="date"
              maximumDate={new Date(new Date().getFullYear(), 12, 31)}
              date={birthdate}
              onChange={setBirthdate}
              textColor={theme.colors.onSurface}
            />
            <TextInput
              onChangeText={setHeight}
              value={height}
              label={t("main.profile.form.height")}
              keyboardType="decimal-pad"
              returnKeyType="done"
              textColor={theme.colors.onSurface}
            />
            <TextInput
              onChangeText={setWeight}
              value={weight}
              label={t("main.profile.form.weight")}
              keyboardType="decimal-pad"
              returnKeyType="done"
              textColor={theme.colors.onSurface}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              textColor={theme.colors.error}
              icon="logout"
              onPress={signOut}
            >
              {t("main.profile.form.button.logout")}
            </Button>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
