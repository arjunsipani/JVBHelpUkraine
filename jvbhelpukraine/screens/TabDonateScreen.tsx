import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';
import Colors from '../constants/Colors';

export default function TabTwoScreen() {
  return (
    <View style={styles.donateContainer}>
      <ScrollView>
        <View style={styles.donateLink}>
          <Button
            buttonStyle={{ backgroundColor: Colors.light.tint }}
            title="Tap here to donate to JVB Help Ukraine!"
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.gofundme.com/f/Medical-Aid-Ukraine"
              )
            }
          />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: (Dimensions.get("window").width * 9) / 10,
              aspectRatio: 866 / 407,
              flex: 1,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/8d119e_904dc081d7bb4023bedbc3474d5a67f0~mv2.png/v1/fill/w_940,h_442,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screenshot%202022-04-16%20185848.png",
            }}
          />
          <Text
            style={{ fontStyle: "italic", textAlign: "center", margin: 10 }}
          >
            Nova Ukraine is a nonprofit organization dedicated to providing
            humanitarian aid to the people of Ukraine and raising awareness
            about Ukraine in the United States as well as in the rest of the
            world. They support factories and animal rescue efforts, provide
            generators, and have even sent 32 tons of medical supplies.
          </Text>
        </View>

        <View style={{ backgroundColor: "#49acf5" }}>
          <Text style={styles.title}>FAQs</Text>
          <Text style={styles.content}>
            Your Inquiries Answered By The JVB Team
          </Text>
        </View>

        <View style={{ backgroundColor: "#f2e191" }}>
          <Text style={styles.question}>
            IF I MAKE A DONATION, CAN I DECIDE WHAT MY MONEY IS USED FOR?
          </Text>
          <Text style={styles.content}>
            Currently, our team is working hard to connect with a{" "}
            <Text style={{ textDecorationLine: "underline" }}>local</Text>{" "}
            charity to get your money straight to the source. As of now, we do
            have 1 top-rated Ukrainian-based charity called Nova Ukraine, and
            you can see where your money goes within the facts page on the
            infographic.
          </Text>
        </View>

        <View>
          <Text style={styles.question}>
            ASIDE FROM DONATING, HOW CAN I PROMOTE THIS CAUSE?
          </Text>
          <Text style={styles.content}>
            Sometimes, a few of us want to take a step further than donating. If
            you feel passionate about this cause, feel free to spread it to
            friends and family!{" "}
            <Text style={{ textDecorationLine: "underline" }}>Any</Text> effort
            is valued, and we appreciate those who go farther than donating a
            monetary value.
          </Text>
        </View>

        <View style={{ backgroundColor: "#f2e191" }}>
          <Text style={styles.question}>
            ARE THERE ANY TAXES AND FEES ASSOCIATED WITH DONATING TO GOFUNDME?
            IS 100% OF MY MONEY GETTING TO UKRAINE?
          </Text>
          <Text style={styles.content}>
            The charity we are donating to is a non-profit, meaning that
            GoFundMe takes <Text style={{ fontWeight: "bold" }}>NO CUT</Text>{" "}
            from your donated amount. However, depending on what credit card
            provider you use, card transaction fees are imposed by your bank.
            The average card fees for this fundraiser have been about 2.5%.
          </Text>
        </View>

        <View>
          <Text style={styles.question}>
            WHY SHOULD I DONATE TO THIS CHARITY OVER OTHERS?
          </Text>
          <Text style={styles.content}>
            Unlike other charities, our team is constantly working to improve
            our efficiency to the charity. Anytime within next month, we expect
            to have another charity configured DIRECT to a Ukrainian civilian
            body. Unlike large charities such as RedCross and UNICEF, this
            quick, mobile team will be able to distribute supplies with greater
            efficiency than larger charities which are centered in 1 area,
            further increasing the impact of your money.
          </Text>
        </View>

        <View style={{ backgroundColor: "#f2e191" }}>
          <Text style={styles.question}>
            WHERE IS MY MONEY GOING ONCE I DONATE IT?
          </Text>
          <Text style={styles.content}>
            Once you donate, the money is split between Nova Ukraine's different
            sectors. The money is then split amongst medical causes, food, and
            shelter bills.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  donateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  donateLink: {
    paddingVertical: 15,
    margin: 10,
  },
  donateLinkText: {
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "garamond",
    textAlign: "center",
    margin: 10,
  },
  question: {
    fontSize: 20,
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
});
