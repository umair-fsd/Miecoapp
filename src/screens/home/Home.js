import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { styles } from "./styles";
import HomeCard from "../../components/HomeCard";
import LottieView from "lottie-react-native";
import { useDispatch } from "react-redux";
import { getTags, fetchCategores, fetchProducts } from "../../redux/actions";

const Home = () => {
  useEffect(() => {
    fetchCategores();
    fetchProducts();
    getTags();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <LottieView
          source={require("../../lottie/ecoAnimation.json")}
          autoPlay
          loop
          style={styles.eco1Img}
        />

        <Text style={styles.subHeading}>DE SALVAR EL PALENTA</Text>
        <Text style={styles.subHeading}>EL PODER</Text>
        <Text style={styles.heading}>Esta en canda Consumidor</Text>

        {/* <Image
          source={require("../../../assets/eco1.jpeg")}
          style={styles.eco1Img}
        /> */}
        <HomeCard
          heading={"Reduce tu huella"}
          description={
            "Encuentra en tu área empresas eco amigables, conoce sus productos y servicios."
          }
        />
        <HomeCard
          heading={"Nuestros eco aliados"}
          description={
            "Conoce más sobre empresas que están haciendo el cambio en nuestro país y sus proyectos."
          }
        />
        <HomeCard
          heading={"Involúcrate"}
          description={
            "Te invitamos a formar parte de nuestra gran familia, escríbenos y déjanos conocerte. "
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
