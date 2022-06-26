import React,{useState,useEffect} from 'react';
import { ActivityIndicator, FlatList, TouchableWithoutFeedback, View, Text } from 'react-native';
import database from '@react-native-firebase/database';

import styles from "./Home.style";
import RoomCard from './../../components/RoomCard';
import ContentModal from './../../components/ContentModal';

function Home({navigation}) {
  const [rooms,setRooms]=useState();
  const [loading,setLoading]=useState(true);
  const [showModal,setShowModal]=useState(false);

  useEffect(()=>{
    const onGetRooms=database().ref("rooms/").on("value",snapshot => {
      const data=snapshot.val();
      if(data !== null){
        const dataRooms=Object.keys(data).map(key=>{
          return {
            id:key,
            ...data[key],
          }
        });
        dataRooms.sort((a,b) => a.name.localeCompare(b.name) );
        setRooms(dataRooms);
      }
      setLoading(false);
    });

    return ()=>{
      database().ref("rooms/").off("value", onGetRooms);
    };
  },[]);

  const keyExtractor=(item)=>{
    return item.id;
  }

  const renderItem=({item})=>{
    return (
      <RoomCard room={item} onClick={()=>goToRoom(item.id,item.name)}/>
    );
  }

  const goToRoom=(roomId,roomName)=>{
    navigation.push("Room",{roomId,roomName});
  }

  const addRoom=async(newRoom)=>{
    const key=await database().ref("rooms/").push({
        name:newRoom,
    }).key;
    modalToggle();
    goToRoom(key,newRoom);
  }

  const modalToggle=()=>{
    setShowModal(!showModal);
  }

  return(
    <>
      { loading ? 
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={35} color="#FF6F00" />
        </View> :
        <View style={styles.container}>
          <FlatList horizontal={false} numColumns={2} columnWrapperStyle={styles.wrapper} keyExtractor={keyExtractor} data={rooms} renderItem={renderItem} />
          <TouchableWithoutFeedback onPress={modalToggle}>
            <View style={styles.addButton}>
              <Text style={styles.addIcon}>+</Text>
            </View>
          </TouchableWithoutFeedback>
          <ContentModal visible={showModal} close={modalToggle} inputPlaceholder={"Oda Adı..."} buttonTitle="Ekle" onSend={addRoom} />
        </View>
      }
    </>
  );
}

export default Home;