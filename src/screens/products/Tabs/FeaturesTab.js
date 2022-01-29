import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  Feather,
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import { useSelector } from "react-redux";

const getFeature = (value, index, tags) => {
  const tag = tags.find((item) => item.id == value);
  console.log("TAG HERE", tag?.name);
  if (tag) {
    switch (tag.name) {
      case "Acepta tarjetas de crédito":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <Entypo name="credit-card" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );
      case "Bueno para grupos":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <MaterialIcons name="groups" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );
      case "Eco amigable":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <Entypo name="leaf" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );
      case "Estacionamiento":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <FontAwesome5 name="parking" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );
      case "Toma reservas":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <AntDesign name="profile" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );
      case "Bodas":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <MaterialCommunityIcons name="ring" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );
      case "Jardín privado":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <MaterialIcons name="park" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );
      case "Piscina interior":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <FontAwesome5 name="swimmer" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );
      case "Spa":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <FontAwesome5 name="spa" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );
      case "Tiene TV":
        return (
          <View style={styles.feature} key={index}>
            <View style={styles.featureIcon}>
              <FontAwesome name="tv" size={18} color="black" />
            </View>
            <Text style={styles.featuresText}>{tag.name}</Text>
          </View>
        );

      default:
        break;
    }
  }
};

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
        <View style={styles.featuresRow}>
          {product?.directories_tag?.length &&
            product?.directories_tag?.map((tag, index) => {
              return getFeature(tag, index, tags);
            })}
        </View>
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
  featuresRow: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    marginBottom: 10,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  feature: {
    flexDirection: "row",
    width: "45%",
    marginTop: 20,
  },
  featureIcon: {
    backgroundColor: "rgba(0,0,0,0.1)",
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  featuresText: {
    marginLeft: 7,
    marginTop: 7,
    fontSize: 12,
  },
});
