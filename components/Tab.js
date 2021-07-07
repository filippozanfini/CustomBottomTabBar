import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = ({ iconName, isCurrent, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
      activeOpacity={0.5}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <AntDesign
        name={iconName}
        size={28}
        style={{
          color: isCurrent ? "#5E35ED" : "#C9C9C9",
        }}
      />
    </TouchableOpacity>
  );
};

export default Tab;
