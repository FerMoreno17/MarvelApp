/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import { Character } from '../models/characterModel';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrentCharacter } from '../redux/slices/characterSlice';
import FavStar from './favStar.component';
import { storageFavourite } from '../helpers/storageHelper';

interface IProp {
    character: Character;
}
export default function CharacterCard({ character }: IProp) {
    const path = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { width, height } = Dimensions.get('screen');


    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            width: width * 0.45,
            height: height * 0.25,
            margin: 5,
        },
        image: {
            width: width * 0.4,
            height: height * 0.19,
            alignSelf: 'center',
        },
        name: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
        },
        starContainer: {
            position: 'absolute',
            top: 15,
            right: 15,
            backgroundColor: 'white',
            borderRadius: 100,
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
                onPress={() => storageFavourite(character)}
                style={[styles.starContainer, styles.shadow]}>
                <FavStar id={character.id} />
            </Pressable>
        </Pressable>
    );
}
