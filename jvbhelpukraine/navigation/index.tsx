/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabHomeScreen from "../screens/TabHomeScreen";
import TabDonateScreen from "../screens/TabDonateScreen";
import TabStoriesScreen from "../screens/TabStoriesScreen";
import TabNewsScreen from '../screens/TabNewsScreen';
import TabAdviceScreen from "../screens/TabAdviceScreen";
import TabResourcesScreen from "../screens/TabResourcesScreen";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabHome"
        component={TabHomeScreen}
        options={({ navigation }: RootTabScreenProps<"TabHome">) => ({
          title: "Home",
          headerTitle: () => (
            <Image
              style={{ width: 75, aspectRatio: 1 }}
              source={{
                uri: "https://static.wixstatic.com/media/20cdd9_b2288ae433444d1ba43d566ae45bd744~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/JVB.png",
              }}
            />
          ),
          headerTitleStyle: {
            fontFamily: "garamond",
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabDonate"
        component={TabDonateScreen}
        options={({ navigation }: RootTabScreenProps<"TabDonate">) => ({
          title: "Donate",
          headerTitleStyle: {
            fontFamily: "garamond",
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabStories"
        component={TabStoriesScreen}
        options={({ navigation }: RootTabScreenProps<"TabStories">) => ({
          title: "Stories",
          headerTitle: "Facts and Stories",
          headerTitleStyle: {
            fontFamily: "garamond",
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabNews"
        component={TabNewsScreen}
        options={({ navigation }: RootTabScreenProps<"TabNews">) => ({
          title: "News",
          headerTitleStyle: {
            fontFamily: "garamond",
          },
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="newspaper-o" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="TabAdvice"
        component={TabAdviceScreen}
        options={({ navigation }: RootTabScreenProps<"TabAdvice">) => ({
          title: "Advice",
          headerTitleStyle: {
            fontFamily: "garamond",
          },
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="quote-right" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="TabResources"
        component={TabResourcesScreen}
        options={({ navigation }: RootTabScreenProps<"TabResources">) => ({
          title: "Resources",
          headerTitleStyle: {
            fontFamily: "garamond",
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="pencil" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3, marginRight: 3 }} {...props} />;
}
