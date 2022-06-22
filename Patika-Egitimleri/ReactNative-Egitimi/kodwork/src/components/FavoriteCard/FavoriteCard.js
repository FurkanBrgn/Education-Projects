import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import Button from "../Button";
import styles from "./FavoriteCard.style";

function FavoriteCard({job,onClick,removeClick}) {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Text style={styles.name}>{job.name}</Text>
        <Text style={styles.company}>{job.company.name}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{job.locations && job.locations.length>0 ? job.locations[0].name : "No Location"}</Text>
        </View>
        <Text style={styles.level}>{job.levels && job.levels.length>0 ? job.levels[0].name : "No Level"}</Text>
        <Button icon="delete" title="Remove" disabled={false} onClick={removeClick}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default FavoriteCard;