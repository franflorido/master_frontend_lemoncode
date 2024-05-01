import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
//import { mockHotelCollection } from './hotel-collection.mock-data';

//let hotelCollection = [...mockHotelCollection];

const characterListUrl = 'https://rickandmortyapi.com/api/character';

interface Response {
  info: { count: number; next: string; pages: number; prev?: string };
  results: CharacterEntityApi[];
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get<Response>(characterListUrl);
  const { results } = data;
  return results;
};
