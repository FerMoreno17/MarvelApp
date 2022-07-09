import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../redux/reducer';
import { setFavouriteArray } from '../redux/slices/characterSlice';


export async function storageFavourite(id: number) {
    const resp = await AsyncStorage.getItem('@favArray');

    if (resp == null) {
        AsyncStorage.setItem('@favArray', JSON.stringify([id.toString()]));
        store.dispatch(setFavouriteArray([id.toString()]));
    } else {
        const array_temp: Array<string> = JSON.parse(resp);

        if (!array_temp.includes(id.toString())) {
            array_temp.push(id.toString());
        } else {
            let buscado = array_temp.indexOf(id.toString());
            array_temp.splice(buscado, 1);
        }
        AsyncStorage.setItem('@favArray', JSON.stringify(array_temp));
        store.dispatch(setFavouriteArray(array_temp));
    }
}

export async function getFavArray() {
    const resp = await AsyncStorage.getItem('@favArray');
    if (resp != null) {
        const array_temp: Array<string> = JSON.parse(resp);
        store.dispatch(setFavouriteArray(array_temp));
    }
}
