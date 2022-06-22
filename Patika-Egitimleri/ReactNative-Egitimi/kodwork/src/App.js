import 'react-native-gesture-handler';
import React from "react";

import Router from "./Router";
import FavoritesProvider from './context/FavoritesProvider';

function App(){
  return (
    <FavoritesProvider>
      <Router />
    </FavoritesProvider>
  );
};

export default App;
