import React, { useState } from "react";
import { View,Text } from "react-native";
import auth from "@react-native-firebase/auth";
import { useFormik } from "formik";
import { showMessage } from "react-native-flash-message";

import styles from "./Signup.style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { RegisterSchema } from './../../Yup';

function Signup({navigation}) {
  const [loading,setLoading]=useState(false);

  const {handleChange, values, errors}=useFormik({
    initialValues:{
      email:"",
      password:"",
      verPassword:""
    },
    validationSchema: RegisterSchema,
  })

  const signup=()=>{
    if(errors.email || values.email ===""){
      showMessage({
        message: errors.email?? "E-posta alanı zorunludur",
        type: "danger",
      });
    }
    else if(errors.password || values.password ===""){
      showMessage({
        message: errors.password?? "Şifre alanı zorunludur",
        type: "danger",
      });
    }
    else if(errors.verPassword || values.verPassword ===""){
      showMessage({
        message: errors.verPassword?? "Şifre tekrarı zorunludur",
        type: "danger",
      });
    }
    else{
      setLoading(true);
      auth().createUserWithEmailAndPassword(values.email,values.password).then(()=>{
        navigation.goBack();
      }).catch(error=>{
        if (error.code === "auth/email-already-in-use") {
          showMessage({
            message: "Bu mail adresine sahip bir kayıt bulunmakta!",
            type: "danger",
          });
        }
    
        if (error.code === "auth/invalid-email") {
          showMessage({
            message: "Bu e-posta adresi geçersiz!",
            type: "danger",
          });
        }
      }).finally(()=>{
        setLoading(false);
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>codetalks</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Input placeholder="e-postanızı giriniz..." value={values.email} onChangeText={handleChange("email")}/>
        <Input placeholder="şifrenizi giriniz..." value={values.password} onChangeText={handleChange("password")} secureTextEntry={true}/>
        <Input placeholder="şifrenizi tekrar giriniz..." value={values.verPassword} onChangeText={handleChange("verPassword")} secureTextEntry={true}/>
        <View style={styles.buttons}>
          <Button title="Kayıt Ol" onClick={signup} theme="secondary" loading={loading}/>
          <Button title="Geri" onClick={()=>navigation.goBack()} theme="primaryWhite"/>
        </View>
      </View>
    </View>
  );
}

export default Signup;