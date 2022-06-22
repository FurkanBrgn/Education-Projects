import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    flex:1,
    borderRadius: 10,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5C58",
    marginHorizontal: 10
  },
  title:{
    fontSize:16,
    color: "white",
    marginLeft:10
  }
});

export default styles;