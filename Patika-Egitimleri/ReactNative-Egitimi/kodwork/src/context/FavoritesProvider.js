import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import initialStates from './stores';

function FavoritesProvider({children}) {
  const store = createStore(reducers,initialStates);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default FavoritesProvider;