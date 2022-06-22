import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Jobs from './Pages/Jobs';
import JobsDetail from './Pages/JobsDetail';
import Favorites from './Pages/Favorites';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const JobsStack =()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{title: "Jobs", headerTitleAlign: "center", headerTintColor: "#FF5C58"}}
      />
      <Stack.Screen
        name="JobsDetail"
        component={JobsDetail}
        options={({route}) => ({
          title: route.params.jobName,
          headerTitleAlign: "center",
          headerTintColor: "#FF5C58",
        })}
      />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="JobsStack" screenOptions={{drawerActiveTintColor: "#FF5C58"}}>
        <Drawer.Screen name="JobsStack" component={JobsStack} options={{headerShown: false, title: "Jobs"}}/>
        <Drawer.Screen name="Favorites" component={Favorites} options={{headerShown: false, title: "Favorited Jobs", headerTintColor: "#FF5C58"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Router;