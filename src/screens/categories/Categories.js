import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CategoryCard from "../../components/CategoryCard";
import LoadingScreen from "../../components/LoadingScreen";
import { useCategories } from "./useCategories";
const Categories = () => {
  const { categories } = useCategories();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.upper}>
          <Text
            style={{
              marginTop: 50,
              fontSize: 40,
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            Categorías
          </Text>
          <Text style={{ marginLeft: 10 }}>
            Seleccione una categoría, de nuestras empresas eco amigables,
            conozca sus productos y servicios.
          </Text>
        </View>
        <View style={styles.categoryContainer}>
          {categories ? (
            categories.map((category, index) => {
              return (
                <CategoryCard
                  key={index}
                  name={category?.name}
                  image={category?.description}
                  categoryId={category?.id}
                />
              );
            })
          ) : (
            <LoadingScreen />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  categoryContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
