import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import { useSelector } from "react-redux";
const FeaturesTab = ({ product }) => {
  const tags = useSelector((state) => state.tags);
  console.log("TAGS", tags);
  return (
    <View style={styles.container}>
      <View showsVerticalScrollIndicator={false} style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={{ flexDirection: "row" }}>
            <Feather name="list" size={18} color={COLORS.flatPink} />
            <Text
              style={{
                marginLeft: 5,
                marginTop: 0,
                fontWeight: "bold",
                paddingBottom: 5,
              }}
            >
              Features
            </Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default FeaturesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.03)",
    alignItems: "center",
  },
  card: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
    width: "95%",
    marginBottom: 10,
    paddingBottom: 5,
  },
  cardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
});
