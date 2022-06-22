import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center"
  },
  error: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center"
  },
  errorTitle:{
    fontSize: 20,
    color: "#FF5C58"
  },
  container:{
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  infoContainer:{
    backgroundColor: "#F2F2F2",
    width: "100%",
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name:{
    color:"black",
    fontWeight: "bold",
    fontSize: 25,
  },
  itemContainer:{
    marginTop: 5,
    flexDirection: "row",
  },
  key:{
    color:"#FF5C58",
    fontWeight: "bold",
    fontSize: 16,
  },
  value:{
    marginLeft: 5,
    color:"black",
    fontWeight: "bold",
    fontSize: 16,
  },
  title:{
    marginTop: 5,
    alignSelf: "center",
    color:"#37474F",
    fontWeight: "bold",
    fontSize: 22,
  },
  contents:{
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0"
  },
  bottomContainer:{
    width: "100%",
    height: 70,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 10
  }
});

export default styles;