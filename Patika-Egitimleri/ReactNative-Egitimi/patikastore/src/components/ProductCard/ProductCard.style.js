import { Dimensions,StyleSheet } from "react-native";

const styles=StyleSheet.create({
  card:{
    flex: 1,
    marginBottom: 8,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: "#ECEFF1",
    borderRadius: 10,
  },
  image:{
    height: Dimensions.get("window").height/3.5,
    resizeMode: "contain",
    backgroundColor: "#fff"
  },
  info:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  title:{
    fontWeight: "bold",
    color: "#000",
    fontSize: 16,
  },
  price:{
    fontWeight: "bold",
    marginTop: 3,
  },
  stock:{
    fontWeight: "bold",
    color: "#FF0000",
  }
});

export default styles;