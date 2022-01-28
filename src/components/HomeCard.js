import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Box, Divider, VStack } from "native-base";
import { COLORS } from "../constants";

const HomeCard = ({ heading, description, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subHeading}>{description}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={{ alignSelf: "center", marginVertical: 20 }}
      >
        <Text style={styles.btnStyle}>CONOCE MÁS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.lightGreen,
    backgroundColor: COLORS.white,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "700",
  },
  subHeading: {
    padding: 5,
    textAlign: "center",
  },
  btnStyle: {
    color: COLORS.primaryGreen,
    fontWeight: "bold",
  },
});
