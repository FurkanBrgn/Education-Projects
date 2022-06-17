import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    backgroundColor: "#F2F2F2",
    padding: 6,
    paddingBottom: 0
  },
  loadingBox:{
    flex: 1,
    justifyContent: "center",
  },
  loading:{
    fontSize: 16,
    color: "#fff",
    textAlign: "center"
  },
  infoBox:{
    paddingBottom: 30
  },
  image:{
    width:"100%",
    height: 250
  },
  title:{
    fontSize: 28,
    color: "#A52A2A",
    fontWeight: "bold"
  },
  area:{
    fontSize: 20,
    color: "#A52A2A",
    fontWeight: "bold"
  },
  seperator:{
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: "#B6B6B6",
    borderBottomWidth: 1,
  },
  description:{
    fontSize: 16,
    color: "#000",
    marginBottom: 20
  },
  button:{
    borderRadius:10,
    backgroundColor: "#FF0000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonTitle:{
    color: "#fff",
    fontSize: 16,
  }
});

export default styles;