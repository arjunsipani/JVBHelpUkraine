import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Linking, Button, FlatList, Image, TouchableOpacity, ScrollView, StyleProp, ViewStyle, RegisteredStyle } from "react-native";
import { Card } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";

interface Props {
  subject: string;
  titles: string[];
  links: string[];
  descs: string[];
  style: ViewStyle;
}

function OrderedList({ subject, titles, links, descs, style }: Props) {
  return (
    <View style={{ flex: 1, width: "100%", ...style }}>
      <Text style={styles.subject}>{subject}</Text>
      {titles.map((t, ind) => (
        <View key={t} style={{ flex: 1, paddingLeft: 5, backgroundColor: style.backgroundColor }}>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "garamond",
              textAlign: "center",
              marginTop: 5,
            }}
          >
            {String.fromCharCode(65 + ind)}. {t}
          </Text>
          <TouchableOpacity
            onPress={() => WebBrowser.openBrowserAsync(links[ind])}
            style={{ paddingVertical: 15 }}
          >
            <Text
              style={{ ...styles.content }}
              lightColor={Colors.light.tint}
            >
              {links[ind]}
            </Text>
          </TouchableOpacity>
          <Text style={styles.content}>{descs[ind]}</Text>
        </View>
      ))}
    </View>
  );
}

export default function TabResourcesScreen({
  navigation,
}: RootTabScreenProps<"TabResources">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Educational Resources</Text>
        <Text style={styles.content}>
          Here are some free resources that can keep a displaced K-12 Ukrainian
          engaged in learning at their own pace, focusing on the four core
          subjects.
        </Text>
        <OrderedList
          subject="1. Mathematics"
          titles={["Khan Academy", "IXL", "BrainPOP"]}
          links={[
            "http://khanacademy.org/",
            "http://ixl.com/",
            "https://www.brainpop.com/",
          ]}
          descs={[
            "Offers complete math courses from 2nd-8th grade, including the multiple advanced high school math subjects, which are Algebra I, Geometry, Algebra II, Trigonometry, Precalculus, Statistics and Probability, AP for Calculus AB, BC, and Statistics, Multivariable Calculus, Differential Equations, and Linear Algebra. It teaches fundamental skills through interactive learning, using videos, quizzes, and practice tests.",
            "Provides 20 questions a day to reach a goal to strengthen math concepts from grades K-12. It is useful for preparing for an exam since ISL is able to reinforce the basic concepts well. They have a comprehensive curriculum, guidance and diagnostics based on solely the student, and real-time and immediate results.",
            "Reinforces mathematical concepts for grades K-8 through primarily video-based learning, including supplemental tools to solidify the concepts, such as vocabulary, quizzes, games, and worksheets.  To login, use username-LCE1 and password-Lions",
          ]}
          style={{ backgroundColor: "#7fc6fa" }}
        />
        <OrderedList
          subject="2. Science"
          titles={[
            "Encyclopedia Britannica",
            "National Geographic Science",
            "HHMI Biointeractive",
          ]}
          links={[
            "http://www.britannica.com/",
            "http://nationalgeographic.com/science",
            "http://biointeractive.org/",
          ]}
          descs={[
            "Hundreds of science-related documents and sources from the oldest general-language encyclopedia for all ages. Its objective, fact-check, and unbiased content that is written by experts and vetted through a rigorous editorial process make it a reliable source for learning.",
            "Offers thousands of scientific articles written worldwide, and lots are available for free. The website provides high-quality, standards-based resources relating to science and other topics.",
            "Scientific resources focus worldwide on classroom-related science studies. The website is a science philanthropy whose mission is to advance basic biomedical research and science education for the benefit of humanity. It uses interactive icons to demonstrate and show science concepts.",
          ]}
          style={{ backgroundColor: "#f2e191" }}
        />
        <OrderedList
          subject="3. English"
          titles={["NewsELA", "Duolingo", "Babbel"]}
          links={[
            "http://newsela.com/",
            "http://duolingo.com/",
            "http://babbel.com/",
          ]}
          descs={[
            "Focuses on age-appropriate, readable texts across a wide array of genres, including fiction, poetry, informational texts, and primary sources. Offers hundreds of articles that gives the opportunity for students to read topics they think are interesting and significant. Geared towards reading levels from students in 3rd-12th grade. Focuses on English as primary language speakers. ",
            "Focuses on learning the English language and starts with an English practice test that determines the student's English level. Then, it challenges speaking, listening, writing, and communication skills through levels of different English concepts and keeps students engaged through goal-setting, rewards, and perks. Can be easily accessible anywhere and anytime since it is a smartphone app. It is equipped for ELL (English Language Learners) students or ESL (English as Secondary Language) students.",
            "Puts an emphasis on learning the English language through real-world conversations with vocabulary words and cultural significance. Includes live lessons created and recorded by expert English language teachers worldwide for all levels. It includes immersive comprehension through podcasts, videos, and games. Like Duolingo, it has easy accessibility anywhere and anytime since it is a smartphone app and is equipped for ELL or ESL students.",
          ]}
          style={{ backgroundColor: "#ffffff" }}
        />
        <OrderedList
          subject="4. Social Studies"
          titles={["PBS LearningMedia", "Icivics", "Historypin"]}
          links={[
            "http://houstonpbs.pbslearningmedia.org/",
            "http://icivics.org/",
            "http://historypin.org/",
          ]}
          descs={[
            "Hundreds of award-winning series and collections with news and events available worldwide - for free. Learn about the present and explore the past with resources on government, history, economics, and more. Learn about a variety of subjects with hundreds of fun education videos.",
            "Created by the first female US supreme court justice, provides history-related resources focused on exploring primary sources and documents for remote learning. Learn about how politics work and the different ways that democracy functions.",
            "Offers access to worldwide local history collections. Helps connect communities by allowing people to share and make collections. Learn about the history of your community.",
          ]}
          style={{ backgroundColor: "#7fc6fa" }}
        />
        <OrderedList
          subject="5. Language"
          titles={["LiveMocha", "Busuu", "Memrise"]}
          links={[
            "http://livemochas.com/",
            "http://busuu.com/",
            "http://memrise.com/",
          ]}
          descs={[
            "Puts an emphasis on intending to have a online language learning community, with a platform for speakers to be able to interact with and supporting each other in language learning and an array of  instructional materials for free.",
            "Enables access to compact lessons from experts and native speakers to help in word mastery. With Busuu, you will be able to learn at your own pace by gaining access to exercises at your specific language level, learn effectively by a study plan and memorizing harder words, and learn together in live meetings with native language speakers.",
            "Their ultimate goal is to provide language lessons primarily for real-life usage, without the textbooks. They achieve this by including thousands of real-life video examples, practical phrases designed by native language speakers, tests that train language skills, and immersive learning so it feels like you are face-to-face with the locals.",
          ]}
          style={{ backgroundColor: "#f2e191" }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "garamond",
    textAlign: "center",
    margin: 5,
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "garamond",
    textAlign: "center",
    margin: 10
  },
  content: {
    fontSize: 12,
    fontFamily: "dengxian",
    textAlign: "center",
    marginBottom: 5,
    marginHorizontal: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
