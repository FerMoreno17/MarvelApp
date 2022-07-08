import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import { store } from './redux/reducer';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </NavigationContainer>
  );
};



export default App;
