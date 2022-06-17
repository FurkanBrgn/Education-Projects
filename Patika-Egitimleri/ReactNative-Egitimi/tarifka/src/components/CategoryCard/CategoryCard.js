import React from "react";
import { Text, Image, View,TouchableWithoutFeedback } from "react-native";

import styles from "./CategoryCard.style";

function CategoryCard({category,onClick}) {
  return (
    <TouchableWithoutFeedback onPress={onClick} touchSoundDisabled>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}}/>
        <Text style={styles.title}>
          {category.strCategory}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;