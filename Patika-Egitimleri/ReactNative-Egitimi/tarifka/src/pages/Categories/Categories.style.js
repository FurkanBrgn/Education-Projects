import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    backgroundColor: "#FFA500",
    padding: 6
  },
  loadingBox:{
    flex: 1,
    justifyContent: "center",
  },
  loading:{
    fontSize: 16,
    color: "#fff",
    textAlign: "center"
  }
});

export default styles;