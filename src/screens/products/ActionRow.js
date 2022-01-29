import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Platform,
  Share,
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
  const [lat, setlat] = useState(product?.latitude || 0);
  const [lng, setLng] = useState(product?.longitude || 0);
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${lat},${lng}`;
  const label = product?.title?.rendered;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "MiEcoSpp | A Step To Green World",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL(`tel:${product?.phone}`)}
      >
        <Feather name="phone" style={styles.icon} />
        <Text style={styles.iconText}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Ionicons name="ios-location-outline" style={styles.icon} />
        <Text style={styles.iconText}>Location</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="hearto" style={styles.icon} />
        <Text style={styles.iconText}>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onShare}>
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
