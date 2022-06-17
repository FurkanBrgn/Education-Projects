import axios from "axios";
import React, { useEffect, useState } from "react";
import { View,Text, FlatList,TouchableWithoutFeedback } from "react-native";

import CategoryCard from "../../components/CategoryCard";
import styles from './Categories.style';

function Categories({navigation}) {
  const [loading,setLoading] = useState(false);
  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    getCategories();
  },[]);
  
  const getCategories= async()=>{
    setLoading(true);
    const {data}=await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    setCategories(data.categories);
    setLoading(false);
  }

  const keyExtractor=(item)=>{
    return item.idCategory;
  }

  const categoryClick=(categoryName)=>{
    navigation.navigate("Meals",{categoryName});
  }

  const renderItem=({item})=>{
    return (
      <CategoryCard category={item} onClick={()=>categoryClick(item.strCategory)}/>
    );
  }

  return (
    <View style={styles.container}>
      { loading
        ? <View style={styles.loadingBox}><Text style={styles.loading}>Loading...</Text></View>
        : <FlatList keyExtractor={keyExtractor} data={categories} renderItem={renderItem} />
      }
    </View>
  );
}

export default Categories;