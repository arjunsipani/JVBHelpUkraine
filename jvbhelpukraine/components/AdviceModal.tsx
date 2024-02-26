// import React, { FC } from "react";
// import { StyleSheet, TextInput, Modal, GestureResponderEvent, Button } from "react-native";
// import Colors from "../constants/Colors";
// import { Text, View } from "./Themed";
// import Layout from "../constants/Layout";

// interface Props {
//   modalVisible: boolean;
//   onRequestClose: () => void;
//   textOne: string;
//   buttonOneTitle: string;
//   onPressOne: (event: GestureResponderEvent) => void;
//   value: string;
//   onChangeText: (text: string) => void;
//   placeholder: string;
// }

// export default function InputModal({
//   modalVisible,
//   onRequestClose,
//   textOne,
//   buttonOneTitle,
//   onPressOne,
//   value,
//   onChangeText,
//   placeholder
// }: Props) {

//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={onRequestClose}
//     >
//       <View style={customModalStyles.centeredView}>
//         <View style={customModalStyles.modalView}>
//           <Text
//             style={customModalStyles.textSize}>{textOne}
//           </Text>

//           <TextInput
//             secureTextEntry
//             autoCapitalize="none"
//             style={[
//               {
//                 flex: 1,
//                 lineHeight: 22,
//                 fontSize: 17,
//                 color: Colors.light.text,
//                 padding: 5,
//               }
//             ]}
//             value={value}
//             onChangeText={onChangeText}
//             placeholder={placeholder}
//             placeholderTextColor={Colors.dark.text}
//           />
//           <Button title={buttonOneTitle}
//             onPress={onPressOne}
//           />
//         </View>
//       </View>
//     </Modal>
//   )
// }

// const customModalStyles = StyleSheet.create({
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     marginBottom: 200,
//   },
//   modalView: {
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     width: Layout.window.width < 1000 ? 320 : 400,
//     height: Layout.window.height < 1000 ? 320 : 400,
//     backgroundColor: Colors.light.background,
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     shadowColor: Colors.dark.background,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.55,
//     shadowRadius: 8,
//     elevation: 20,
//   },
//   textSize: {
//     textAlign: 'center',
//     fontSize: 17,
//   },
// });

import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Colors from "../constants/Colors";
import { submitAdvice } from "../fetches";
import RoundIconButton from "./RoundIconButton";

type Props = {
  visible: boolean;
  onClose: () => void;
  setSubmitError: React.Dispatch<React.SetStateAction<string>>;
}

const AdviceModal: React.FC<Props> = ({
  visible,
  onClose,
  setSubmitError,
}) => {
  const [name, setName] = useState("");
  const [adv, setAdv] = useState("");
  const [success, setSuccess] = useState(false);
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleOnChangeText = (text: string, valueFor: "name" | "adv") => {
    if (valueFor === "name") setName(text);
    if (valueFor === "adv") setAdv(text);
  };

  const handleSubmit = async () => {
    if (!name.trim() && !adv.trim()) return onClose();
    if (
      !/^[A-za-z\-\s]*$/.test(name) ||
      !(adv as string)
        .split("")
        .every((c) => 0 <= c.charCodeAt(0) && c.charCodeAt(0) <= 255)
    ) {
      setSubmitError(
        "Please try to stick to alphabetical characters (no accents), spaces, and hyphens only for your name! Your message can only contain 8-bit characters - i.e. ASCII 0 to 255."
      );
      return;
    }
    const attempt = await submitAdvice(name, adv);
    if (attempt.success) setSuccess(true);
    else {
      if (attempt.value === "too-many-requests") {
        setSubmitError("You have been ratelimited. Please try again in 30 seconds.");
      } else {
        setSubmitError(
          "Something went wrong. Please try again. If you continue to run into issues, email us at jvbhelpukraine@gmail.com."
        );
      }
    }
    closeModal();
  };

  const closeModal = () => {
    if (success) {
      setName("");
      setAdv("");
    }
    onClose();
  };

  return (
    <>
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput
            value={name}
            onChangeText={(text) => handleOnChangeText(text, "name")}
            placeholder="Name (leave empty for anonymous)"
            style={[styles.input, styles.name, { marginTop: 10 }]}
          />
          <TextInput
            value={adv}
            multiline
            placeholder="Advice"
            style={[styles.input, styles.adv]}
            onChangeText={(text) => handleOnChangeText(text, "adv")}
          />
          <View style={styles.btnContainer}>
            <RoundIconButton
              size={30}
              antIconName="check"
              onPress={handleSubmit}
            />
            <RoundIconButton
              size={30}
              style={{ marginLeft: 15 }}
              antIconName="close"
              onPress={closeModal}
            />
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.light.tint,
    fontSize: 20,
    color: Colors.dark.background,
  },
  name: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  adv: {
    height: 100,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
});

export default AdviceModal;