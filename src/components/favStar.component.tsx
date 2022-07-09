/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';
interface FavStarProp {
    id: number;
}

export default function FavStar({ id }: FavStarProp) {
    const [active, setActive] = useState(false);
    const { favouriteArray } = useSelector((state: RootState) => state.character);

    useEffect(() => {
        setActive(favouriteArray.includes(id.toString()));
    }, [favouriteArray]);


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
