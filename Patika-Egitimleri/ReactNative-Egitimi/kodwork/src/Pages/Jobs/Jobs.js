import React from 'react';
import { FlatList,View, Text, ActivityIndicator } from 'react-native';

import styles from "./Jobs.style";
import JobCard from './../../components/JobCard/JobCard';
import useFetch from '../../hooks/useFetch';

function Jobs({navigation}) {
  const {data,error,loading}=useFetch("https://www.themuse.com/api/public/jobs?page=0","result");

  const keyExtractor=(item)=>{
    return String(item.id);
  }

  const renderItem=({item})=>{
    return (
      <JobCard job={item} onClick={()=>goToJobDetail(item.id,item.name)}/>
    );
  }

  const goToJobDetail=(jobId,jobName)=>{
    navigation.navigate("JobsDetail",{jobId,jobName});
  }

  if(error){
    return (
      <View style={styles.error}>
        <Text style={styles.errorTitle}>Bir Hata Oluştu - {error}</Text>
      </View>
    );
  }

  return (
    <View style={loading ? styles.loading : styles.container}>
    {loading ? 
      <ActivityIndicator size={35} color="#FF5C58" />
     :
      <FlatList keyExtractor={keyExtractor} data={data} renderItem={renderItem}/>
    }
    </View>
  );
}

export default Jobs;