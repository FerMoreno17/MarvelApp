import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../models/characterModel';

export interface CharacterState {
    currentCharacter: Character | null;
    limit:number;
}

const initialState: CharacterState = {
    currentCharacter: null,
    limit:20,
};

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCurrentCharacter: (state, action: PayloadAction<Character>) => {
            state.currentCharacter = action.payload;
        },
        setNewPage:(state)=>{
            state.limit = state.limit + 20;
        },
    },
});

export const {
    setCurrentCharacter,
    setNewPage,
} = characterSlice.actions;

export default characterSlice.reducer;
