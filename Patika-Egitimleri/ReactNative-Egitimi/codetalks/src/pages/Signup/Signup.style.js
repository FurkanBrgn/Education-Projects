import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6F00",
  },
  upperContainer:{
    flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer:{
    flex:1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title:{
    fontSize: 25,
  },
  buttons:{
    width: "100%",
    marginTop:30,
  },
});

export default styles;