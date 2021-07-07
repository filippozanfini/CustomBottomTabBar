import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VideoScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Video Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default VideoScreen;
