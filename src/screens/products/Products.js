import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import CategoryCard from "../../components/CategoryCard";
import LoadingScreen from "../../components/LoadingScreen";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";

import { useProducts } from "./useProducts";
import axios from "axios";
const Products = ({ route }) => {
  const { categoryId, categoryName } = route.params;

  const { products } = useProducts();

  return (
    <SafeAreaView style={styles.container}>
      <Header title={categoryName} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.upper}>
          {/* <Text style={{ marginLeft: 10 }}>
            Seleccione una categoría, de nuestras empresas eco amigables,
            conozca sus productos y servicios.
          </Text> */}
        </View>
        <View style={styles.productContainer}>
          {products
            ?.filter(
              (product) => product?.["directories-category"][0] === categoryId
            )
            .map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  product={product}
                  categoryName={categoryName}
                />
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  productContainer: {
    marginTop: 10,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
  },
});
