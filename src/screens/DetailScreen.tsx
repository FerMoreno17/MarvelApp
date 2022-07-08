import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';


export default function DetailScreen() {
  const { currentCharacter } = useSelector((state: RootState) => state.character);

  return (
    <View>
      <Text>{currentCharacter?.name}</Text>
    </View>
  );
}
