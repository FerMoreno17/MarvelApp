import React from 'react';
import { Text, StyleSheet, Image, Pressable, Alert } from 'react-native';
import { Character } from '../models/characterModel';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrentCharacter } from '../redux/slices/characterSlice';
import FavStar from './favStar.component';

interface IProp {
    character: Character;
}
export default function CharacterCard({ character }: IProp) {
    const path = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            width: 160,
            margin: 5,
            height: 200,
        },
        image: {
            width: 150,
            height: 150,
            alignSelf: 'center',
        },
        name: {
            color: 'black',
            fontWeight: 'bold',
        },
        starContainer: {
            position: 'absolute',
            top: 15,
            right: 10,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        shadow: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        },
    });

    function handleGoToDetail() {
        dispatch(setCurrentCharacter(character));
        navigation.navigate('DetailScreen');
    }

    function handleFav() {
        Alert.alert('touched');
    }

    return (
        <Pressable onPress={handleGoToDetail} style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: path }}
            />
            <Text style={styles.name} adjustsFontSizeToFit>
                {character.name}
            </Text>
            <Pressable
                onPress={handleFav}
                style={styles.starContainer}>
                <FavStar />
            </Pressable>
        </Pressable>
    );
}
