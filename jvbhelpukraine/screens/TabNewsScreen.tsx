import { useEffect, useMemo, useState } from "react";
import { StyleSheet, Linking, Button, FlatList, Image, RefreshControl, ActivityIndicator } from "react-native";
import { Button as Button2 } from "react-native-elements";
import { Card } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Article, RootTabScreenProps } from "../types";

import axios from "axios";
import { getArticles } from "../fetches";
import { parseSpecial } from "../constants/utils";
import Colors from "../constants/Colors";

export default function TabNewsScreen({
  navigation,
}: RootTabScreenProps<"TabNews">) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState<string>("");
  const [refreshLoading, setRefreshLoading] = useState(false);

  const fetch = async (initialLoad: boolean) => {
    const setFunc = initialLoad ? setIsLoading : setRefreshLoading;
    setFunc(true);
    const attempt = await getArticles();
    if (attempt.success) {
      setArticles(attempt.value.articles);
      setFunc(false);
    } else {
      setErrors("Something went wrong. Please try again later.");
      setFunc(false);
    }
  };

  useEffect(() => {
    fetch(true);
  }, []);

  const renderItem = ({ item }: { item: Article }) => {
    const { title, url, description, datePublished, provider, imageUrl } = item;
    return (
      <View
        key={title}
        style={{
          marginTop: 10,
          borderColor: "black",
          borderRadius: 5,
          borderBottomWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {/*  Text */}
          <View
            style={{
              justifyContent: "space-around",
              flex: 2 / 3,
              margin: 10,
            }}
          >
            <Text style={styles.title}>{title}</Text>
          </View>
          {/*  Image */}
          <View style={{ flex: 1 / 3, margin: 10 }}>
            <Image
              style={{ width: "100%", height: 200 }}
              source={{
                uri: !!imageUrl
                  ? imageUrl
                  : "https://static.wixstatic.com/media/20cdd9_b2288ae433444d1ba43d566ae45bd744~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/JVB.png",
              }}
            />
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={styles.content}>{description}</Text>
          <Text style={styles.content}>
            Published At: {parseSpecial(datePublished).toLocaleString()}
          </Text>
        </View>
        <Button
          title="Go to Article"
          onPress={() => {
            Linking.openURL(`${url}`);
          }}
        />
      </View>
    );
  };

  const memoizedRender = useMemo(() => renderItem, [articles]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        // <Text style={{ justifyContent: "center", alignItems: "center" }}>
        //   Loading...
        // </Text>
        <ActivityIndicator />
      ) : (
        <>
          {!!errors && (
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              {errors}
            </Text>
          )}
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshLoading}
                onRefresh={() => fetch(false)}
              />
            }
            data={articles}
            renderItem={memoizedRender}
            keyExtractor={(item: Article) => item.url}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
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
