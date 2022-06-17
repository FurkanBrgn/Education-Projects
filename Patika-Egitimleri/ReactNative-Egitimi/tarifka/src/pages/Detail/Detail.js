import React,{useState,useEffect} from "react";
import { View,Text,Image,TouchableWithoutFeedback, ScrollView,Linking, Alert } from "react-native";
import axios from "axios";

import styles from './Detail.style';

function Detail({route}) {
  const {mealId}=route.params;
  const [meal,setMeal]=useState({});
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    getMeal();
  },[]);

  const getMeal=async()=>{
    setLoading(true);
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    setMeal(data.meals[0]);
    setLoading(false);
  }

  const goToVideo=(videoLink)=>{
    Linking.openURL(videoLink);
  }

  return (
    <View style={styles.container}>
      { loading
        ? <View style={styles.loadingBox}><Text style={styles.loading}>Loading...</Text></View>
        :(<ScrollView contentContainerStyle={styles.infoBox}>
          <Image style={styles.image} source={{uri: meal.strMealThumb}}/>
          <Text style={styles.title}>{meal.strMeal}</Text>
          <Text style={styles.area}>{meal.strArea}</Text>
          <View style={styles.seperator}/>
          <Text style={styles.description}>{meal.strInstructions}</Text>
          <TouchableWithoutFeedback onPress={()=>goToVideo(meal.strYoutube)} touchSoundDisabled>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Watch on Youtube</Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>)
      }
    </View>
  );
}

export default Detail;