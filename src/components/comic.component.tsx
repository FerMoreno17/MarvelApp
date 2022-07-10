import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';

export default function Comics() {
    const { comicArray } = useSelector((state: RootState) => state.character);
    const { width } = Dimensions.get('screen');

    const styles = StyleSheet.create({
        container: {
            flexDirection:'row',
            flexWrap: 'wrap',
            display: 'flex',
            alignItems: 'center',
            width:width * 0.9,
            justifyContent:'center',
        },
        imageContainer: {
            margin: 5,
        },
        image: {
            width: 100,
            height: 150,
        },
    });

    function renderComic(item: any, id: number) {
        const path = `${item.path}.${item.extension}`;

        return (
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: path }}
                    key={id}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {comicArray.map(comic => renderComic(comic.thumbnail, comic.id))}
        </View>
    );
}
