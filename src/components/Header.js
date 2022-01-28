import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Ionicons
        name="arrow-back-circle-outline"
        size={30}
        color={"black"}
        onPress={() => navigation?.goBack()}
      />
      <Text style={styles.title}>{title}</Text>
      <Text></Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    marginTop: 15,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  title: {
    marginLeft: -30,
    fontSize: 18,
    // fontWeight: "bold",
    color: "black",
  },
});
