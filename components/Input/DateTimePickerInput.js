import { useState } from "react";
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput } from "react-native-paper";
import PropTypes from "prop-types";

export default function DateTimePickerInput({
  onChange,
  date,
  maximumDate,
  minimumDate,
  label,
  placeholder,
  autoFocus,
  mode,
}) {
  const [selectedDate, setSelectedDate] = useState(date || new Date());
  const [selectedDateLabel, setSelectedDateLabel] = useState("");
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (value) => {
    setSelectedDate(value);
    setSelectedDateLabel(selectedDate ? selectedDate.toLocaleDateString() : "");
    hideDatePicker();
    onChange?.(value);
  };

  return (
    <View>
      <TextInput
        editable={false}
        value={selectedDateLabel}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onPressIn={showDatePicker}
        right={
          <TextInput.Icon
            icon={mode === "time" ? "clock" : "calendar"}
            onPress={showDatePicker}
          />
        }
      />
      <DateTimePickerModal
        date={selectedDate}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        isVisible={datePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

DateTimePickerInput.propTypes = {
  onChange: PropTypes.func,
  date: PropTypes.instanceOf(Date),
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  mode: PropTypes.oneOf(["date", "time", "datetime"]),
};
