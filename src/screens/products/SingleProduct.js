import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Header from "../../components/Header";
import ActionRow from "./ActionRow";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { COLORS } from "../../constants";
import HomeTab from "./Tabs/HomeTab";
import DescriptionTab from "./Tabs/DescriptionTab";
import FeaturesTab from "./Tabs/FeaturesTab";

const renderScene = (route, product) => {
  console.log(product);
  switch (route?.route?.key) {
    case "Home":
      return <HomeTab product={product} />;
    case "Description":
      return <DescriptionTab product={product} />;
    case "Features":
      return <FeaturesTab product={product} />;
    default:
      return null;
  }
};
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: COLORS.primaryGreen }}
    style={{ backgroundColor: "white" }}
    tabStyle={styles.tab}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          color: focused ? COLORS.primaryGreen : "black",

          fontWeight: "bold",
        }}
      >
        {route.title}
      </Text>
    )}
  />
);

const SingleProduct = ({ route }) => {
  const layout = useWindowDimensions();
  const { product } = route.params;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Home", title: "Home" },
    { key: "Description", title: "Description" },
    { key: "Features", title: "Features" },
  ]);
  console.log(product);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={product?.title?.rendered} />
      <View style={styles.innerContainer}>
        <Image
          style={styles.bannerImage}
          source={{
            uri: "http://www.miecoapp.com/wp-content/uploads/2021/03/MiEcoApp_comida10-min.jpeg",
          }}
        />
        <ActionRow product={product} />
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={(route) => renderScene(route, product)}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  bannerImage: {
    width: "100%",
    height: 200,
  },
  tab: {
    // width: 120,
  },
  indicator: {
    // backgroundColor: "#ffeb3b",
  },
});
