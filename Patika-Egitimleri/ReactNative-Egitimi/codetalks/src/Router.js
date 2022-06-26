import React,{ useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from "@react-native-firebase/auth";

import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Room from './pages/Room';

const Stack = createNativeStackNavigator();

function Router() {
  const [userSession,setUserSession]=useState(null);

  useEffect(()=>{
    auth().onAuthStateChanged((user)=>{
      setUserSession(!!user);
    });
  },[]);

  const AuthStack=()=>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
  }

  const ContentStack=()=>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: "Odalar",headerShadowVisible: false,headerTitleAlign: "center",headerTintColor: "#FFA040"}}/>
        <Stack.Screen name="Room" component={Room} options={({route}) => ({
          title: route.params.roomName,
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "#FFA040",
          headerRight:()=>{
            return <Icon name="exit-to-app" size={30} color="#FFA040" onPress={()=>{
              auth().signOut();
            }}/>;
          }
        })}/>
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      { !userSession ?
        <AuthStack/>
        :
        <ContentStack/>
      }
    </NavigationContainer>
  );
}

export default Router;