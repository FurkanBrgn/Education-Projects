import { StyleSheet } from "react-native";

const basicStyles=StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10
  },
  title:{
    fontSize: 16,
    fontWeight: "bold"
  }
});

const styles={
  primaryWhite:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      backgroundColor: "#FFF",
    },
    title:{
      ...basicStyles.title,
      color: "#FF6F00"
    }
  }),
  primaryOrange:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      backgroundColor: "#FF6F00",
    },
    title:{
      ...basicStyles.title,
      color: "#FFF"
    }
  }),
  secondary:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      backgroundColor: "#FFA040",
    },
    title:{
      ...basicStyles.title,
      color: "#FFF"
    }
  }),
};

export default styles;