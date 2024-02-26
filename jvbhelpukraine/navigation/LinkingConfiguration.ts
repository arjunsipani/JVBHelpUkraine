/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHomeScreen: "home",
            },
          },
          TabDonate: {
            screens: {
              TabDonateScreen: "donate",
            },
          },
          TabAdvice: {
            screens: {
              TabAdviceScreen: "advice",
            },
          },
          TabNews: {
            screens: {
              TabNewsScreen: "news",
            },
          },
          TabStories: {
            screens: {
              TabStoriesScreen: "stories",
            },
          },
          TabResources: {
            screens: {
              TabResourcesScreen: "resources",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};

export default linking;
