import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

import styles from "./RoomCard.style";

function RoomCard({room,onClick}) {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Text style={styles.title}>{room.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RoomCard;