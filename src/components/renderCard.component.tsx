import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface RenderCardProp {
    name: string;
    available: number;
}

export default function RenderCard({ available, name }: RenderCardProp) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#B0130F',
            width:110,
            height:110,
            borderRadius: 100,
            margin: 5,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        },
        label: {
            fontSize: 20,
            fontStyle: 'italic',
            color: 'white',
        },
        paragraph: {
            fontSize: 18,
            color: 'white',
        },
    });

    return (
        <View style={styles.container}>
            <Icon name="book" size={30} color="white"/>
            <Text style={styles.label}>{name}</Text>
            <Text style={styles.paragraph}>
                {available}
            </Text>
        </View>
    );
}
