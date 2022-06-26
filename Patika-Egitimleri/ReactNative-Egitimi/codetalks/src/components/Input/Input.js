import React from 'react';
import { View,TextInput } from 'react-native';

import styles from "./Input.style";

function Input(props) {
  return (
    <View style={styles.container}>
      <TextInput {...props}/>
    </View>
  );
}

export default Input;