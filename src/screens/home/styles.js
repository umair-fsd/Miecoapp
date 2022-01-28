import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: COLORS.lightGray1,
    paddingTop: 20,
  },
  subHeading: {
    fontSize: 20,
    marginTop: -55,

    color: "black",
  },
  heading: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.lightGreen,
  },
  eco1Img: {
    width: "100%",
    // height: 300,
    marginTop: -50,
    // backgroundColor: "red",
  },
});
