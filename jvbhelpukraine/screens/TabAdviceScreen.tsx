import React, { useEffect, useState, Fragment } from "react";
import { StyleSheet, Linking, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { Snackbar } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import AdviceModal from "../components/AdviceModal";
import { Text, View } from "../components/Themed";
import { getAdvice } from "../fetches";
import { RootTabScreenProps } from "../types";
import Colors from "../constants/Colors";

export default function TabAdviceScreen({
  navigation,
}: RootTabScreenProps<"TabAdvice">) {
  const [advice, setAdvice] = useState<{
    name: string;
    adv: string;
    time: number;
  }>();
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);
  const [error, setError] = useState("");

  useEffect(() => {
    updateAdvice();
  }, []);
  const updateAdvice = async () => {
    const attempt = await getAdvice();
    if (attempt.success) {
      setAdvice(attempt.value);
    } else {
      if (attempt.value === "too-many-requests") {
        setError(
          "You have been ratelimited. Please try again in 5 seconds."
        );
      } else if (attempt.value === "invalid-input") {
        setError(
          "Please try to stick to alphabetical characters (no accents), spaces, and hyphens only for your name! Your message can only contain 8-bit characters - i.e. ASCII 0 to 255."
        );
      } else {
        setError(
          "Something went wrong. Please try again. If you continue to run into issues, email us at jvbhelpukraine@gmail.com."
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      {!!advice ? (
        <Fragment>
          <Text style={styles.adv}>{advice.adv}</Text>
          <Text style={styles.nametime}>
            from {advice.name} on {new Date(advice.time).toLocaleString()}
          </Text>
        </Fragment>
      ) : null}
      <Button
        buttonStyle={{ backgroundColor: Colors.light.tint, marginBottom: 10 }}
        title="More advice!"
        onPress={updateAdvice}
      />
      <Button
        buttonStyle={{ backgroundColor: Colors.light.tint }}
        title="Submit advice"
        onPress={() => setModalVisible(true)}
      />
      <AdviceModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        setSubmitError={setError}
      />
      <Snackbar
        visible={!!error}
        onDismiss={() => setError("")}
        theme={{ colors: { backdrop: "red" } }}
        duration={3000}
        style={{ zIndex: 3 }}
      >
        {error}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  adv: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "dengxian",
    textAlign: "center",
    margin: 10,
  },
  nametime: {
    fontSize: 15,
    fontFamily: "dengxian",
    fontStyle: "italic",
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "garamond",
    textAlign: "center",
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
