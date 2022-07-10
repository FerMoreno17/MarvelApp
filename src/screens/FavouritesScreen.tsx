import { View, StyleSheet, Dimensions, FlatList, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';
import FavouriteCard from '../components/favouriteCard.component';

export default function FavouritesScreen() {
    const { favouriteArray } = useSelector((state: RootState) => state.character);
    const { width } = Dimensions.get('screen');

    const styles = StyleSheet.create({
        container: {
            width: width * 0.93,
            margin:10,
            backgroundColor:'#991411',
            padding:10,
        },
        title:{
            color:'white',
            fontSize:18,
            fontWeight:'bold',
            marginLeft:10,
        },
    });

    function renderCard({ item }: any) {
        return <FavouriteCard item={item} />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favourites</Text>
            <FlatList
                data={favouriteArray}
                renderItem={renderCard}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
