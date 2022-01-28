import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";

// import { getMediaImage } from "../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL, MEDIA_IMAGE } from "../Api/requests";
const getMediaImage = async (id) => {
  return await axios.get(`${BASE_URL}${MEDIA_IMAGE}/${id}`).then((res) => {
    return res.data;
  });
};

const ProductCard = ({ product, categoryName }) => {
  const [image, setImage] = useState(
    "http://www.miecoapp.com/wp-content/uploads/2021/03/miecoapp-logo-icono-.png"
  );
  const navigation = useNavigation();

  useEffect(async () => {
    const mediaImage = await getMediaImage(product?.featured_media);
    setImage(mediaImage.source_url);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SingleProduct", { product })}
      style={styles.card}
    >
      <View style={styles.leftBox}>
        <Image
          source={{
            uri: image,
            // uri: images[0][1477],
          }}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
      </View>
      <View style={styles.rightBox}>
        <Text style={styles.heading}>{product?.title?.rendered}</Text>
        <View style={{ flexDirection: "row" }}>
          <Entypo
            name="location-pin"
            size={14}
            color="grey"
            style={{ marginTop: 6 }}
          />
          <Text style={styles.location}>
            {product?.address && `${product?.address}, `}
            {product?.city && `${product?.city},`} {product?.country}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name="label"
            size={14}
            color="grey"
            style={{ marginTop: 6 }}
          />
          <Text style={styles.labels}>{categoryName && categoryName}</Text>
        </View>

        <AirbnbRating
          count={5}
          defaultRating={4}
          size={15}
          reviewSize={0}
          isDisabled
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 5,
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
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,

    justifyContent: "center",
  },
  leftBox: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "rgba(0,0,0,0.1)",
    padding: 2,
  },
  rightBox: {
    flex: 2,
    paddingLeft: 4,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    // textAlign: "center",
    marginLeft: 3,
  },
  location: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "left",
    color: "grey",
  },
  labels: {
    fontSize: 12,
    marginTop: 5,

    textAlign: "left",
    marginLeft: 3,
    color: "black",
  },
});
