import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from "./pages/Categories/Categories";
import Meals from "./pages/Meals/Meals";
import Detail from "./pages/Detail/Detail";

const Stack = createNativeStackNavigator();

const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={{headerShadowVisible: false,headerTitleAlign: "center",headerTintColor: "#FFA500"}}/>
        <Stack.Screen name="Meals" component={Meals} options={{headerShadowVisible: false,headerTitleAlign: "center",headerTintColor: "#FFA500"}}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerShadowVisible: false,headerTitleAlign: "center",headerTintColor: "#FFA500"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
