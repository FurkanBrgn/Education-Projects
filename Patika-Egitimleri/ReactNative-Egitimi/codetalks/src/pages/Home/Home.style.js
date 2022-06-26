import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  wrapper:{
    justifyContent: "space-between",
  },
  addButton:{
    position: "absolute",
    bottom:20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor: "#FF6F00",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  addIcon:{
    color: "#FFF",
    fontSize: 40,
    marginBottom: 4
  },
});

export default styles;