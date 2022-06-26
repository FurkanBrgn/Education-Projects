import React from 'react';
import { View, Text } from 'react-native';
import { formatDistance, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

import styles from "./MessageCard.style";

function MessageCard({message}) {
  const formattedTime=formatDistance(parseISO(message.time), new Date(), { addSuffix: true,locale:tr })

  return (
    <View style={styles.container}>
      <View style={styles.upperInfo}>
        <Text style={styles.user}>{message.user}</Text>
        <Text style={styles.time}>{formattedTime}</Text>
      </View>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
}

export default MessageCard;