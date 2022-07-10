import { Image, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrentCharacter } from '../redux/slices/characterSlice';
import { Character } from '../models/characterModel';

interface FavouriteCardProps {
    item: any
}

export default function FavouriteCard({ item }: FavouriteCardProps) {
    const path = `${item.thumbnail.path}.${item.thumbnail.extension}`;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            flexDirection: 'row',
            width: 150,
            height: 80,
            margin: 5,
            padding: 10,
            borderRadius: 20,
            alignItems: 'center',
        },
        text: {
            color: 'black',
            flex: 1,
        },
        image: {
            flex: 1,
            width: 65,
            height: 65,
            alignSelf: 'center',
            borderRadius: 100,
        },
    });

    function handleNavigation() {
        dispatch(setCurrentCharacter(item as Character));
        navigation.navigate('DetailScreen');
    }
    return (
        <Pressable
            onPress={handleNavigation}
            style={styles.container}
        >
            <Text style={styles.text}>{item.name}</Text>
            <Image
                style={styles.image}
                source={{ uri: path }}
            />
        </Pressable>
    );
}
