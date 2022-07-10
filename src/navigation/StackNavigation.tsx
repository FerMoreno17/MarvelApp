import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
  FavouritesScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#991411',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title:'MarvelApp'}} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{title:'Description'}}/>
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} options={{title:'Favourites'}}/>
    </Stack.Navigator>
  );
}
