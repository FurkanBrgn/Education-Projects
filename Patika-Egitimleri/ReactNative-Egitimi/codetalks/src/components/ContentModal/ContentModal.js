import React,{useState} from 'react';
import { View,TextInput } from 'react-native';
import Modal from "react-native-modal";

import styles from "./ContentModal.style";
import Button from "./../Button";

function ContentModal({visible,close,inputPlaceholder,buttonTitle,onSend}) {
  const [newContent,setNewContent]=useState("");
  const [loading,setLoading]=useState(false);

  const addContent=async()=>{
    if(newContent !== ""){
      setLoading(true);
      const content=newContent;
      setNewContent("");
      await onSend(content);
      setLoading(false);
    }
  }

  const onClose=()=>{
    setNewContent("");
    close();
  }

  return (
    <Modal style={styles.modal} isVisible={visible} onSwipeComplete={onClose} onBackdropPress={onClose} onBackButtonPress={onClose}>
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder={inputPlaceholder}
          placeholderTextColor="#C7C7CC"
          value={newContent}
          onChangeText={setNewContent}
          multiline/>
        <Button title={buttonTitle} onClick={addContent} theme="primaryOrange" loading={loading}/>
      </View>
    </Modal>
  );
}

export default ContentModal;