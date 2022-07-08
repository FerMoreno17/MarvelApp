import axios from 'axios';
import { MarvelApiCharacter } from '../models/characterModel';

const serverRequest = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',
    params: {
        apikey: '6d6b333d93483555affe62bed601ae81',
        ts: 1,
        hash: 'a20bf1055469e2accd9fa2f9654b99f2',
    },
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export async function getCharacters(cantidad: number) {
    const response = await serverRequest.get<MarvelApiCharacter>(`/characters?limit=${cantidad}`);
    return response.data.data.results;
}
