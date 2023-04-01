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

export default function Profile() {
  const { t } = useTranslation();
  const theme = useTheme();

  const { signOut } = useContext(AuthContext);

  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState({});
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <Layout title="Vous">
      <ScrollView>
        <View style={{ rowGap: 15 }}>
          <View style={{ rowGap: 10 }}>
            <View style={{ rowGap: 5 }}>
              <SegmentedButtons
                value={gender}
                onValueChange={setGender}
                buttons={[
                  {
                    value: "F",
                    label: t("main.profile.form.gender.choices.female"),
                    checkedColor: theme.colors.primary,
                    style: { borderWidth: 0 },
                  },
                  {
                    value: "M",
                    label: t("main.profile.form.gender.choices.male"),
                    checkedColor: theme.colors.primary,
                    style: { borderWidth: 0 },
                  },
                  {
                    value: "",
                    label: t("main.profile.form.gender.choices.others"),
                    checkedColor: theme.colors.primary,
                    style: { borderWidth: 0 },
                  },
                ]}
              />
            </View>
            <DateTimePickerInput
              label={t("main.profile.form.birthdate")}
              mode="date"
              maximumDate={new Date(new Date().getFullYear(), 12, 31)}
              date={birthdate}
              onChange={setBirthdate}
            />
            <TextInput
              onChangeText={setHeight}
              value={height}
              label={t("main.profile.form.height")}
              inputMode="decimal"
            />
            <TextInput
              onChangeText={setWeight}
              value={weight}
              label={t("main.profile.form.weight")}
              inputMode="decimal"
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
