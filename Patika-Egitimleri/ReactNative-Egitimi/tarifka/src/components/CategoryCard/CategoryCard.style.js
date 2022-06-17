import { Dimensions,StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    width: "100%",
    height: 80,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderWidth: 2,
    borderColor: "#BCAAA4",
    marginBottom:12,
    backgroundColor: "#ECEFF1",
    flexDirection: "row",
    alignItems: "center"
  },
  image:{
    width: 100,
    height: 50,
    resizeMode: "contain"
  },
  title:{
    marginLeft: 5,
    fontSize: 16,
    color: "#000"
  }
});

export default styles;