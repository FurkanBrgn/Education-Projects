import React,{useState,useEffect} from "react";
import { View,FlatList,Text } from "react-native";
import axios from 'axios';

import styles from './Meals.style';
import MealCard from "../../components/MealCard";

function Meals({navigation,route}) {
  const {categoryName}=route.params;
  const [meals,setMeals]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    getMeals();
  },[]);

  const getMeals=async()=>{
    setLoading(true);
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    setMeals(data.meals);
    setLoading(false);
  }

  const keyExtractor=(item)=>{
    return item.idMeal;
  }

  const mealClick=(mealId)=>{
    navigation.navigate("Detail",{mealId});
  }

  const renderItem=({item})=>{
    return(
      <MealCard meal={item} onClick={()=>mealClick(item.idMeal)}/>
    );
  }

  return (
    <View style={styles.container}>
      { loading
        ? <View style={styles.loadingBox}><Text style={styles.loading}>Loading...</Text></View>
        : <FlatList keyExtractor={keyExtractor} data={meals} renderItem={renderItem} />
      }
    </View>
  );
}

export default Meals;