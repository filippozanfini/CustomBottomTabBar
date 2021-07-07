import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import VideoScreen from "../screens/VideoScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

const TabBarNavigator = () => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        marginBottom: useSafeAreaInsets().bottom,
        backgroundColor: "white",
      }}
    >
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="videocamera" component={VideoScreen} />
        <Tab.Screen name="search1" component={SearchScreen} />
        <Tab.Screen name="user" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TabBarNavigator;
