import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});

export default ProfileScreen;
