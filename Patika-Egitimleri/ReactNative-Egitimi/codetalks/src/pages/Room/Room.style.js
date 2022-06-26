import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#FFB74D",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFB74D",
    paddingTop: 10,
    paddingHorizontal:10,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  roomBanner:{
    width: "100%",
    height: 40,
    marginBottom: 20,
    borderStyle: "dotted",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  bannerTitle:{
    fontSize: 16,
    color: "#FFF",
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