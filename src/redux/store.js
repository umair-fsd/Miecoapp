import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
  blacklist: ["cart", "user", "productImages"],
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

// export const store = createStore(reducer);
