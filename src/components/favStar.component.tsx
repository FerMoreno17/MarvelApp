import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface FavStarProp {
    active?: boolean;
}

export default function FavStar({ active = false }: FavStarProp) {

    return (
        <>
            {
                !active
                    ? <Icon name="star-outline" size={30} color="grey" />
                    : <Icon name="star" size={30} color="#FFC300" />
            }
        </>
    );
}
