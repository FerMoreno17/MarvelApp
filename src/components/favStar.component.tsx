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
    const { starIdArray } = useSelector((state: RootState) => state.character);
    const size = 25;

    useEffect(() => {
        console.log({ starIdArray });
        setActive(starIdArray.includes(id.toString()));
    }, [starIdArray]);

    return (
        <>
            {
                !active
                    ? <Icon name="star-outline" size={size} color="grey" />
                    : <Icon name="star" size={size} color="#FFC300" />
            }
        </>
    );
}
