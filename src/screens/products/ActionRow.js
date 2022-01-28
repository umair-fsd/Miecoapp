import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";

const ActionRow = ({ product }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL(`tel:${product?.phone}`)}
      >
        <Feather name="phone" style={styles.icon} />
        <Text style={styles.iconText}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="ios-location-outline" style={styles.icon} />
        <Text style={styles.iconText}>Location</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="hearto" style={styles.icon} />
        <Text style={styles.iconText}>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="share" style={styles.icon} />
        <Text style={styles.iconText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionRow;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,

    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  iconText: {
    marginTop: 5,
    alignSelf: "center",
    color: "rgba(0,0,0,0.5)",
  },
  icon: {
    fontSize: 25,
    alignSelf: "center",
    color: "rgba(0,0,0,0.5)",
  },
});
