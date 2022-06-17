import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: "column",
  },
  image:{
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: "cover"
  },
  titleBox:{
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    position:'absolute',
    bottom:0,
    opacity:0.7,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title:{
    position:'absolute',
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    bottom: 10
  },
});

export default styles;
