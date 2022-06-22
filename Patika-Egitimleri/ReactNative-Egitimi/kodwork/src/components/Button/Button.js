import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.style';

function Button({icon,title,onClick,disabled}) {
  return (
    <TouchableWithoutFeedback onPress={onClick} disabled={disabled}>
      <View style={styles.container}>
        <Icon name={icon} size={24} color="#fff" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Button;