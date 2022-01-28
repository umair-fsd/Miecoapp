import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View, StatusBar as RNStatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./src/screens/onboarding";
import Home from "./src/screens/home/Home";
import { NativeBaseProvider, Box } from "native-base";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/navigation/Tabs";
import Products from "./src/screens/products/Products";
import SingleProduct from "./src/screens/products/SingleProduct";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={"Onboarding"}
            >
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Products" component={Products} />
              <Stack.Screen name="SingleProduct" component={SingleProduct} />

              <Stack.Screen name="Home" component={Tabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: RNStatusBar.currentHeight,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
