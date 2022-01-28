import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primaryGreen: "#519548", // Light Blue   //OLD #00a7ad
  lightGray: "#77777", // Dark purple
  darkGray: "#555555",
  offWhite: "#F5F5F5",
  lightGreen: "#88C425",
  pink: "#FE4365",
  aqua: "#17C69B",
  yellow: "#FDB71A",
  red: "#F54828",
  orange: "#F7803C",
  purple: "#3E1B3C",
  white: "#FFFFFF",
  lightGray: "dbdbdb",
  lightGray1: "#f5f6fa",
  darkGray: "#808080",
  faceBook: "#4267B2",
  twitter: "#1DA1F2",
  instagram: "#fb3958",
  //FLAT COLORS
  flatPink: "#ff5252",
  flatOrange: "#ff793f",
  flatGreen: "#33d9b2",
  flatBlue: "#34ace0",
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
