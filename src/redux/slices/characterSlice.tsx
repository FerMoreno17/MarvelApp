import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../models/characterModel';
import { Comic } from '../../models/comicModel';

export interface CharacterState {
    currentCharacter: Character | null;
    limit: number;
    favouriteArray: Array<Character>;
    starIdArray: Array<string>;
    comicArray: Comic[];
}

const initialState: CharacterState = {
    currentCharacter: null,
    limit: 20,
    favouriteArray: [],
    starIdArray: [],
    comicArray: [],
};

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCurrentCharacter: (state, action: PayloadAction<Character>) => {
            state.currentCharacter = action.payload;
        },
        setNewPage: (state) => {
            state.limit = state.limit + 20;
        },
        setFavouriteArray: (state, action: PayloadAction<Array<Character>>) => {
            state.favouriteArray = action.payload;
        },
        setStarIdArray: (state, action: PayloadAction<Array<string>>) => {
            state.starIdArray = action.payload;
        },
        setComicArray: (state, action: PayloadAction<Array<Comic>>) => {
            state.comicArray = action.payload;
        },
    },
});

export const {
    setCurrentCharacter,
    setNewPage,
    setFavouriteArray,
    setStarIdArray,
    setComicArray,
} = characterSlice.actions;

export default characterSlice.reducer;
