import { StyleSheet,Dimensions } from "react-native";

const styles=StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title:{
    fontSize: 18,
    color: "#FF6F00"
  }
});

export default styles;