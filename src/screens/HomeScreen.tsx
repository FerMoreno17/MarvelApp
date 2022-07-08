import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Character } from '../models/characterModel';
import CharacterCard from '../components/characterCard.component';
import usePaginator from '../hooks/usePaginator';

export default function HomeScreen() {
    const { characterList, loadNextPage } = usePaginator();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            backgroundColor: 'grey',
        },
        title: {
            fontSize: 22,
            fontWeight: 'bold',
            color: 'black',
        },
        body: {
            flex: 1,
            backgroundColor: 'orange',
        },
        button: {
            padding: 10,
            borderRadius: 5,
            backgroundColor: 'red',
        },
        label: {
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
        },
        spinner: {
            height: 150,
        },
    });


    function renderPersonajeCard(item: Character) {
        return <CharacterCard character={item} />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Marvel App</Text>
            <View style={styles.body}>
                <FlatList
                    data={characterList}
                    renderItem={personaje => renderPersonajeCard(personaje.item)}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    onEndReached={loadNextPage}
                    ListFooterComponent={(
                        <ActivityIndicator
                            style={styles.spinner}
                            size={20}
                            color="red"
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
