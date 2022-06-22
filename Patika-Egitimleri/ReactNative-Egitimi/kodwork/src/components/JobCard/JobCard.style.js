import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    flex: 1,
    height: 150,
    marginBottom: 15,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "white"
  },
  name:{
    color:"black",
    fontWeight: "bold",
    fontSize: 18,
  },
  company:{
    color:"black",
    fontSize: 16,
  },
  locationContainer:{
    marginTop: 5,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FF5C58"
  },
  location:{
    color:"white",
    fontSize: 16,
  },
  level:{
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 10,
    right: 10,
    color:"#FF5C58",
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default styles;