import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import {
  BASE_URL,
  LIST_CATEGORIES,
  LIST_PRODUCTS,
  MEDIA_IMAGE,
  GET_TAGS,
} from "../Api/requests";

export const fetchCategores = () => {
  return async (dispatch) => {
    axios
      .get(`${BASE_URL}${LIST_CATEGORIES}`)
      .then((res) => {
        dispatch({
          type: "FETCH_CATEGORIES",
          payload: res.data,
        });
      })
      .catch((err) => console.log("ERROR FETCHING CATEGORIES", err));
  };
};
export const fetchProducts = () => {
  return async (dispatch) => {
    axios
      .get(`${BASE_URL}${LIST_PRODUCTS}`)
      .then((res) => {
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: res.data,
        });
      })
      .catch((err) => console.log("ERROR FETCHING PRODUCTS", err));
  };
};
export const getMediaImage = async (id) => {
  return await axios
    .get(`${BASE_URL}${MEDIA_IMAGE}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("ERROR FETCHING MEDIA", err));
};
export const getTags = () => {
  return async (dispatch) => {
    axios
      .get(`${BASE_URL}${GET_TAGS}`)
      .then((res) => {
        console.log("RESPONSE", res.data);
        dispatch({
          type: "FETCH_TAGS",
          payload: res.data,
        });
      })
      .catch((err) => console.log("ERROR FETCHING TAGS", err));
  };
};
