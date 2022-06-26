import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  modal:{
    justifyContent: "flex-end",
    margin:0,
  },
  container: {
    width: "100%",
    height: 280,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input:{
    width:"100%",
    color: "#000"
  }
});

export default styles;