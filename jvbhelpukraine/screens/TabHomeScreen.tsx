import React from "react";
import { StyleSheet, Image, ScrollView, Dimensions, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import Colors from "../constants/Colors";
const BLUE = require("../assets/images/blue.png");

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabHomeScreen({
  navigation,
}: RootTabScreenProps<"TabHome">) {
  const { fontSize, ...restStyles } = styles.content; 
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      style={{ backgroundColor: "transparent" }}
    >
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: "#7fc6fa" }}>
            <Text style={styles.title}>UKRAINE-RUSSIA CRISIS</Text>
            <Text style={styles.content}>
              Polina (10 years old) was one of the first children to be reported
              dead during the Ukraine crisis. On the third day of the Russian
              invasion, her family of five was escaping by car. The Russian
              forces opened fire on the family's car. Polina was taken to the
              hospital but sadly passed away. Her brother and parents also
              passed three days later. One sibling was left as an orphan, with
              no one to call his own.
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: "#7fc6fa",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              buttonStyle={{
                backgroundColor: Colors.light.tint,
                flexBasis: 1 / 2,
              }}
              title="More Stories"
              onPress={() => navigation.navigate("TabStories")}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#7fc6fa",
            }}
          >
            <Image
              style={{
                width: (Dimensions.get("window").width * 9) / 10,
                aspectRatio: 745 / 417,
                flex: 1,
                marginBottom: 10,
              }}
              source={{
                uri: "https://static.wixstatic.com/media/8d119e_0b7a4ccdb3ce4494a9c463e60daf10c6~mv2.png/v1/fill/w_745,h_417,al_c,q_85,enc_auto/Screenshot%202022-05-01%20214006.png",
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1, width: "100%" }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f2e191",
            }}
          >
            <Image
              style={{
                width: (Dimensions.get("window").width * 9) / 10,
                aspectRatio: 460 / 315,
                flex: 1,
                marginTop: 10,
              }}
              source={{
                uri: "https://static.wixstatic.com/media/8d119e_7c8a298e8739406bad744014372a2004~mv2.jpg/v1/fill/w_460,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9ad721cf-ae98-4f6b-8363-aace4d2ff6c0_edited.jpg",
              }}
            />
          </View>
          <View style={{ backgroundColor: "#f2e191" }}>
            <Text style={styles.title}>OUR GOAL</Text>
            <Text style={{ fontWeight: "bold", fontSize: 22, ...restStyles }}>
              Helping Ukraine
            </Text>
            <Text style={styles.content}>
              JVB is a Jain Temple in Houston, Texas. We, the youth group of
              JVB, have taken it upon ourselves to raise awareness of the
              Russia-Ukraine crisis and eventually reach our goal of raising
              $10,000 for much-needed help in Ukraine.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "garamond",
    textAlign: "center",
    margin: 10,
  },
  content: {
    fontSize: 12,
    fontFamily: "dengxian",
    textAlign: "center",
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
