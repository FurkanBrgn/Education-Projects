import React from "react";
import { Text, Image, View,TouchableWithoutFeedback } from "react-native";

import styles from "./MealCard.style";

function MealCard({meal,onClick}) {
  return (
    <TouchableWithoutFeedback onPress={onClick} touchSoundDisabled>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: meal.strMealThumb}}/>
        <View style={styles.titleBox}></View>
        <Text style={styles.title}>
          {meal.strMeal}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealCard;
