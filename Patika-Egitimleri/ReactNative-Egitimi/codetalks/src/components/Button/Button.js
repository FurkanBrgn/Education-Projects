import React from 'react';
import { TouchableWithoutFeedback, View, Text, ActivityIndicator } from 'react-native';

import styles from "./Button.style";

function Button({title,onClick,theme,loading}) {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles[theme].container}>
        {loading ? <ActivityIndicator size={25} color="#FFF" /> :
        <Text style={styles[theme].title}>{title}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Button;