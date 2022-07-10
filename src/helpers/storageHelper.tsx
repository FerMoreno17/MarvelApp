import AsyncStorage from '@react-native-async-storage/async-storage';
import { Character } from '../models/characterModel';
import { store } from '../redux/reducer';
import { setFavouriteArray, setStarIdArray } from '../redux/slices/characterSlice';


export async function storageFavourite(character: Character) {
    const resp = await AsyncStorage.getItem('@favArray');
    const stars = await AsyncStorage.getItem('@stars');

    if (resp == null) {
        const temp = [character];
        AsyncStorage.setItem('@favArray', JSON.stringify(temp));
        store.dispatch(setFavouriteArray(temp));

        AsyncStorage.setItem('@stars', JSON.stringify([character.id]));
        store.dispatch(setStarIdArray([character.id.toString()]));
    } else {
        const array_temp: Array<Character> = JSON.parse(resp);
        const stars_temp: Array<string> = JSON.parse(stars!);

        let elementExist = false;

        array_temp.map(element => {
            if (element.id === character.id) {
                elementExist = true;
            }
        });

        if (!elementExist) {
            array_temp.push(character);
            stars_temp.push(character.id.toString());
        } else {
            array_temp.map((element, index) => {
                if (element.id === character.id) {
                    array_temp.splice(index, 1);
                    stars_temp.splice(index, 1);
                }
            });
        }
        AsyncStorage.setItem('@favArray', JSON.stringify(array_temp));
        AsyncStorage.setItem('@stars', JSON.stringify(stars_temp));
        store.dispatch(setFavouriteArray(array_temp));
        store.dispatch(setStarIdArray(stars_temp));
    }
}

export async function getFavArray() {
    const favourites = await AsyncStorage.getItem('@favArray');
    const stars = await AsyncStorage.getItem('@stars');
    if (favourites != null) {
        const array_temp: Array<Character> = JSON.parse(favourites);
        store.dispatch(setFavouriteArray(array_temp));
    }
    if (stars != null) {
        const stars_temp: Array<string> = JSON.parse(stars);
        store.dispatch(setStarIdArray(stars_temp));
    }
}
