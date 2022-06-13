import React, {useState} from "react";
import {SafeAreaView,View,FlatList,Text,TextInput,StyleSheet} from "react-native";
import ProductCard from "./components/ProductCard";
import products from "./data.json";

function App() {
  const [text,setText]=useState("");

  const keyExtractor=(item)=>{
    return String(item.id);
  }

  const renderItem=({item})=>{
    return (
      <ProductCard product={item} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATİKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Ara..."
      />
      <FlatList 
        horizontal={false}
        numColumns={2}
        keyExtractor={keyExtractor}
        data={products}
        renderItem={renderItem} 
        columnWrapperStyle={styles.wrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingVertical: 12,
    paddingHorizontal: 7,
  },
  title:{
    color: "#800080",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 5,
  },
  input: {
    height: 40,
    marginHorizontal: 5,
    marginVertical: 12,
    borderRadius: 10,
    backgroundColor: "#ECEFF1",
    padding: 10,
    paddingLeft: 15,
  },
  wrapper:{
    justifyContent: "space-between",
  }
});

export default App;
