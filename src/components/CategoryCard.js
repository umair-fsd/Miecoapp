import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const CategoryCard = ({ name, image, categoryId }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Products", { categoryId, categoryName: name })
      }
      style={styles.card}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 120, height: 120, borderRadius: 100 }}
      />
      <Text style={{ textAlign: "center", marginTop: 10, fontWeight: "bold" }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
    // padding: 15,
    // height: 150,
    width: "45%",
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
