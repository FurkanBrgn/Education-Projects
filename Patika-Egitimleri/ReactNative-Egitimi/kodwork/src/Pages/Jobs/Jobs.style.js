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
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});

export default styles;