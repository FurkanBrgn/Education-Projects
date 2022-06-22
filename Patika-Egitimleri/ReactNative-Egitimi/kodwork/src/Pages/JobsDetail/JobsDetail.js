import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { View, Text, ActivityIndicator, Platform, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import {useDispatch} from 'react-redux';

import styles from './JobsDetail.style';
import Button from "../../components/Button";

function JobsDetail({route}) {
  const {jobId}=route.params;
  const [data,setData]= useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    getData();
  },[]);

  const getData=async()=>{
    try{
      const {data:responseData}=await axios.get(`https://www.themuse.com/api/public/jobs/${jobId}`);
      setData(responseData);
    }catch(err){
      setError(err.message)
    }finally {
      setLoading(false);
    }
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
        <>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.itemContainer}>
              <Text style={styles.key}>Locations:</Text>
              <Text style={styles.value}>{data.locations && data.locations.length>0 ? data.locations[0].name : "No Location"}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.key}>Job Level:</Text>
              <Text style={styles.value}>{data.levels && data.levels.length>0 ? data.levels[0].name : "No Level"}</Text>
            </View>
            <Text style={styles.title}>Job Detail</Text>
          </View>
          <WebView
            originWhitelist={['*']}
            source={{ html: data.contents }}
            scalesPageToFit={(Platform.OS === "ios") ? true : false}
          />
          <View style={styles.bottomContainer}>
            <Button title="Submit" icon="send" disabled={false} onClick={()=>{Linking.openURL(data.refs.landing_page)}}/>
            <Button title="Favorite Job" icon="heart" disabled={false} onClick={()=>{dispatch({type: "Add_Favorite",payload:{newFavorite:data}})}}/>
          </View>
        </>
      }
    </View>
  );
}

export default JobsDetail;