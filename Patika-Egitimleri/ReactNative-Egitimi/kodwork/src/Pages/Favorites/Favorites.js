import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from "./Favorites.style";
import FavoriteCard from '../../components/FavoriteCard';

function Favorites({navigation}) {
  const favorites=useSelector(state=>state.favorites);
  const dispatch=useDispatch();

  const keyExtractor=(item)=>{
    return String(item.id);
  }

  const renderItem=({item})=>{
    return (
      <FavoriteCard job={item} onClick={()=>goToJobDetail(item.id,item.name)} removeClick={()=>dispatch({type: "Remove_Favorite",payload:{removeFavoriteId:item.id}})}/>
    );
  }

  const goToJobDetail=(jobId,jobName)=>{
    navigation.navigate("JobsDetail",{jobId,jobName});
  }

  return (
    <View style={styles.container}>
      <FlatList keyExtractor={keyExtractor} data={favorites} renderItem={renderItem}/>
    </View>
  );
}

export default Favorites;