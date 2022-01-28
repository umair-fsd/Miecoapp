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
import MapView, { Marker } from "react-native-maps";
const HomeTab = ({ product }) => {
  console.log("UMAIR", product);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="business" size={18} color={COLORS.flatPink} />
            <Text
              style={{
                marginLeft: 5,
                marginTop: 0,
                fontWeight: "bold",
                paddingBottom: 5,
              }}
            >
              Business Info
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.LeftColumn}>
            <View style={[styles.roundIcon, { marginBottom: 210 }]}>
              <Ionicons name="ios-location-sharp" size={20} color="white" />
            </View>
            <View
              style={[styles.roundIcon, { backgroundColor: COLORS.flatOrange }]}
            >
              <Feather name="phone" size={20} color="white" />
            </View>
            <View
              style={[styles.roundIcon, { backgroundColor: COLORS.flatPink }]}
            >
              <Feather name="globe" size={20} color="white" />
            </View>
          </View>
          <View style={styles.RighColumn}>
            <Text style={styles.location}>
              {product?.address && `${product?.address}, `}
              {product?.city && `${product?.city},`} {product?.country}
            </Text>
            <MapView
              initialRegion={{
                latitude: product?.latitude
                  ? parseFloat(product?.latitude)
                  : 37.78825,
                longitude: product?.longitude
                  ? parseFloat(product?.longitude)
                  : -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={styles.map}
            >
              <Marker
                coordinate={{
                  latitude: product?.latitude
                    ? parseFloat(product?.latitude)
                    : 37.78825,
                  longitude: product?.longitude
                    ? parseFloat(product?.longitude)
                    : -122.4324,
                }}
              >
                <Ionicons
                  name="ios-location-sharp"
                  size={24}
                  color={COLORS.flatPink}
                />
              </Marker>
            </MapView>
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${product?.phone}`)}
            >
              <Text style={styles.phoneNumber}>{product?.phone}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL(`${product?.contact_web}`)}
            >
              <Text style={styles.phoneNumber}>{product?.contact_web}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[styles.squareIcon, { backgroundColor: COLORS.faceBook }]}
          >
            <EvilIcons name="sc-facebook" size={30} color="white" />
          </View>
          <View
            style={[styles.squareIcon, { backgroundColor: COLORS.instagram }]}
          >
            <AntDesign name="instagram" size={20} color="white" />
          </View>
          <View
            style={[styles.squareIcon, { backgroundColor: COLORS.twitter }]}
          >
            <AntDesign name="twitter" size={20} color="white" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeTab;

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
  LeftColumn: {
    width: "15%",
  },
  RighColumn: {
    width: "85%",
  },
  map: {
    width: "100%",
    height: 200,
  },
  roundIcon: {
    margin: 5,
    backgroundColor: COLORS.flatGreen,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 30,
    height: 30,
  },
  squareIcon: {
    margin: 5,
    backgroundColor: COLORS.flatGreen,
    alignItems: "center",
    justifyContent: "center",

    width: 40,
    height: 40,
  },
  location: {
    fontSize: 16,
    marginVertical: 7,
    color: COLORS.flatPink,
  },
  phoneNumber: {
    marginTop: 20,
    fontSize: 14,
  },
});
