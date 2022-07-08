/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Character } from '../models/characterModel';
import { getCharacters } from '../service/axiosServer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducer';
import { setNewPage } from '../redux/slices/characterSlice';

export default function usePaginator() {
    const dispatch = useDispatch();
    const { limit } = useSelector((state: RootState) => state.character);
    const [characterList, setCharacterList] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadNextPage();
    }, []);

    async function loadNextPage() {
        setLoading(true);
        const response = await (getCharacters(limit));
        dispatch(setNewPage());
        setCharacterList(response);
        setLoading(false);
    }
    return {
        loading,
        characterList,
        loadNextPage,
    };
}
