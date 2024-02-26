import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Linking, Button, FlatList, Image, TouchableOpacity, Platform, ScrollView, Dimensions } from "react-native";
import { Card } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Colors from "../constants/Colors";
import WebView from "react-native-webview";

export default function TabStoriesScreen({
  navigation,
}: RootTabScreenProps<"TabStories">) {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      style={{ backgroundColor: "transparent" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          THE <Text style={{ fontWeight: "bold" }}>DEVASTATING</Text> FACTS OF
          THE INVASION
        </Text>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 866 / 487,
              flex: 1,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/046427_b48494d71f03456baf77ef377ab1aec5~mv2.png/v1/fill/w_1280,h_720,al_c,q_90,enc_auto/Russian%20Invasion%20of%20Ukraine%20Infographic.png",
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.canva.com/design/DAE_UCq_3bY/N5g_NwG1iJVFMuz7T_5yTg/view"
              )
            }
            style={{ paddingVertical: 15 }}
          >
            <Text
              style={{ textAlign: "center" }}
              lightColor={Colors.light.tint}
            >
              Infographic link
            </Text>
          </TouchableOpacity>
          <Text style={styles.content}>
            Interested in looking at more facts about the invasion? Watch the
            video below.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <WebView
            source={{
              uri: "https://www.wevideo.com/view/2665344107",
            }}
            style={{
              width: Dimensions.get("window").width,
              height: 300,
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>

        <View style={{ backgroundColor: "#49acf5", width: "100%" }}>
          <Text style={styles.title}>REAL WORLD STORIES</Text>
        </View>

        <View style={{ backgroundColor: "#f2e191", flex: 1 }}>
          <Text style={styles.content}>
            Some of the most targeted resources in Ukraine are power generators.
            This is due to the fact that Russia targets power in order to
            completely crumble the infrastructure. A group of dedicated
            volunteers was delivering these important supplies when sadly they
            were hit by the Russians. By the end of this conflict, three brave
            volunteers were killed, and many more injured.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f2e191",
          }}
        >
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 600 / 450,
              flex: 1,
              marginBottom: 10,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/8d119e_90e7f5ed9ed745c49768ea4033ffc546~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/17-generators-cherkassy-chernihiv-Skichko.jpg",
            }}
          />
        </View>

        <Text style={styles.content}>
          14-year-old Vadym was in school when a shell hit his classroom
          ceiling, killing three of his classmates, now Vadym and his mother
          live in a metro station where he struggles to do his studies on a
          train.
        </Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 684 / 456,
              flex: 1,
              marginBottom: 10,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/8d119e_5ed4f9724a0e4894a794d65f681d6c4e~mv2.jpg/v1/fill/w_684,h_456,al_c,lg_1,q_80,enc_auto/DSC_6333.jpg",
            }}
          />
          <Text
            style={{
              fontStyle: "italic",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Here you can see Vadym struggling to do his studies.
          </Text>
        </View>

        <View style={{ backgroundColor: "#f2e191", flex: 1 }}>
          <Text style={styles.content}>
            On March 23rd Maksym started to cry as the first bombs started to
            fall on Mariupol, Russia as he and his family piled into a rusty car
            and headed to safety. Finally, as their car ran out of gas in Urzuf,
            the family continued on foot to Slovakia, but the scars remain.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f2e191",
          }}
        >
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 622 / 557,
              flex: 1,
              marginBottom: 10,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/8d119e_25831ad747774ac4af9ba242831f9fe8~mv2.jpg/v1/fill/w_622,h_557,al_c,lg_1,q_80,enc_auto/LOOOOOl_edited.jpg",
            }}
          />
          <Text
            style={{
              fontStyle: "italic",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Here we can see the Maksym struggling to carry out his day to day
            activities in Slovakia.
          </Text>
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        ></View>
        <Text style={styles.content}>
          Timur Orazova (13 years old) has been disabled since birth. At 3
          months old Timur had to get surgery to remove fluid from his brain. As
          a result, he suffered from chronic headaches and seizures. The war and
          shelling have only exacerbated his condition, to about 2 attacks a
          day. Now Timur's medicine is running out, and there are no pharmacies
          open in his town of Zolote.
        </Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 824 / 549,
              flex: 1,
              marginBottom: 10,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/8d119e_c7f988daab344151b3b4c72a0c2882d4~mv2.jpg/v1/fill/w_824,h_549,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Timur_jp_jp.jpg",
            }}
          />
        </View>

        <View style={{ backgroundColor: "#f2e191", flex: 1, width: "100%" }}>
          <Text style={styles.content}>
            In the town of Vorokhta, more than 100 children from four orphanages
            have been endangered by Russian shelling. Starting in early March,
            the Kharkiv region started taking a significant number of strikes
            from aerial weaponry. The children were placed in one of the local
            medical facilities, at the ages of 7 months to 6 years old. Thanks
            to volunteers the children are adapting to their new surroundings.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f2e191",
          }}
        >
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 720 / 480,
              flex: 1,
              marginBottom: 10,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/8d119e_cc1e045c87a24c5d8c4860de6dfa1f13~mv2.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_80,enc_auto/DSC_5972_edited.jpg",
            }}
          />
        </View>

        <Text style={styles.content}>
          On February 17th, Sasha, 12, and Sergey, 17, were on the way to soccer
          practice when they heard an automatic weapon firing. The Ukrainian
          Stanytsia Luhanska was shelled heavily from the Donbas region. Now
          Sergey and his siblings are among 378,000 children in need of
          protection according to the U.N. Office for the Coordination of
          Humanitarian Affairs (OCHA).
        </Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 866 / 577,
              flex: 1,
              marginBottom: 10,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/20cdd9_da54837725f941bea16bfec6413ce547~mv2.jpg/v1/fill/w_889,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ukraine-GettyImages-1238564639_edited_jp.jpg",
            }}
          />
        </View>

        <View style={{ backgroundColor: "#f2e191", flex: 1 }}>
          <Text style={styles.content}>
            When Zina, a mother, had heard a noise from outside, she suspected a
            bombing. She knew she only had seconds to bring her child and
            husband to safety. Although their house was destroyed in seconds,
            the bombing continued for 12 hours. The next day, she went to the
            Kharkiv metro with her husband and 19 month old baby, Alice. They
            stayed there for 32 days in the lightless and lifeless underground
            subway. She started teaching English and Yoga to children there, who
            also had deteriorating mental health. Her child, who had already had
            cancer related surgeries twice, had fallen ill. Although she was in
            dire need of medical aid for her family, she was scared to go
            outside with bombs raging. Zina risked her life and she took Alice
            to a hospital in Lviv. Alice is now in good condition and
            recovering.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f2e191",
          }}
        >
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 866 / 567,
              flex: 1,
              marginBottom: 10,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/20cdd9_41dcce6896d942fdb22d8202eaa664b4~mv2.png/v1/fill/w_905,h_593,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/20cdd9_41dcce6896d942fdb22d8202eaa664b4~mv2.png",
            }}
          />
        </View>

        <Text style={styles.content}>
          Thirteen-year-old Sofia from the Mykolaiv region was hit by a missile
          on February 24th and taken to a hospital in the city of Mykolaiv the
          doctors immediately started operating on her, she underwent many
          surgeries and was under anesthetics for a couple of weeks. She was
          then airlifted to a more specialized hospital in Kyiv. She had to get
          her head shaved because she was impaled by many pieces of shrapnel
          even in her head. She now wishes to see her father and brothers again.
        </Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 866 / 577,
              flex: 1,
              marginBottom: 10,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/20cdd9_7755a1e1cff6403a9e769c968d12ab8f~mv2.jpeg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Ukraine2.jpeg",
            }}
          />
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
