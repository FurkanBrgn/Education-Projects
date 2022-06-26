import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    borderRadius: 10,
    backgroundColor: "#FFF",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10
  },
  upperInfo:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  user:{
    fontSize: 14,
    color: "#000"
  },
  time:{
    fontSize: 14,
    color: "#000",
    fontStyle: "italic"
  },
  text:{
    fontSize: 16,
    color: "#000",
    fontWeight: "bold"
  }
});

export default styles;