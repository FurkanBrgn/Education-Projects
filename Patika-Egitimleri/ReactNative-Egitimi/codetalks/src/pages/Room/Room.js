import React, { useState,useEffect } from 'react';
import { FlatList,View, Text, ActivityIndicator,TouchableWithoutFeedback } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from "./Room.style";
import MessageCard from './../../components/MessageCard';
import ContentModal from './../../components/ContentModal';

function Room({route}) {
  const [messages,setMessages]=useState([]);
  const [loading,setLoading]=useState(false);
  const [showModal,setShowModal]=useState(false);
  const {roomId,roomName}=route.params;

  useEffect(()=>{
    const onGetMessages=database().ref(`messages/${roomId}/`).on("value",snapshot => {
      const data=snapshot.val();
      if(data !== null){
        const dataMessages=Object.keys(data).map(key=>{
          return {
            id:key,
            ...data[key],
          }
        });
        dataMessages.sort((a,b) => a.time < b.time ? -1 : a.time > b.time ? 1 : 0);
        setMessages(dataMessages);
      }
      setLoading(false);
    });

    return ()=>{
      database().ref(`messages/${roomId}/`).off("value", onGetMessages);
    };
  },[]);

  const keyExtractor=(item)=>{
    return item.id;
  }

  const renderItem=({item})=>{
    return (
      <MessageCard message={item}/>
    );
  }

  const addMessage=async(newMessage)=>{
    const user=auth().currentUser;
    await database().ref(`messages/${roomId}/`).push({
        text: newMessage,
        user: user.email.split("@")[0],
        time: new Date().toISOString(),
    });
    modalToggle();
  }

  const modalToggle=()=>{
    setShowModal(!showModal);
  }

  return (
    <>
      { loading ? 
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={35} color="#FF6F00" />
        </View> :
        <View style={styles.container}>
          <View style={styles.roomBanner}>
            <Text style={styles.bannerTitle}>{roomName+" odası kuruldu!"}</Text>
          </View>
          <FlatList keyExtractor={keyExtractor} data={messages} renderItem={renderItem} />
          <TouchableWithoutFeedback onPress={modalToggle}>
            <View style={styles.addButton}>
              <Text style={styles.addIcon}>+</Text>
            </View>
          </TouchableWithoutFeedback>
          <ContentModal visible={showModal} close={modalToggle} inputPlaceholder={"Mesajın..."} buttonTitle="Gönder" onSend={addMessage} />
        </View>
      }
    </>
  );
}

export default Room;