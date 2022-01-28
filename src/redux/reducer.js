import { initialState } from "./state";

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    case "FETCH_TAGS":
      return {
        ...state,
        tags: payload,
      };

    default:
      return state;
  }
}
