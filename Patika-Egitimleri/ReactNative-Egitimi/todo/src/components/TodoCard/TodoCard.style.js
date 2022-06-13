import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "#7BA151",
    paddingLeft: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  completed:{
    backgroundColor: "#37474F",
  },
  name:{
    fontSize: 16,
    color: "#fff"
  },
  completedName:{
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#808080"
  }
});

export default styles;