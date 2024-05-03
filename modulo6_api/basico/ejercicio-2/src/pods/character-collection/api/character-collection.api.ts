import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
//import { mockHotelCollection } from './hotel-collection.mock-data';

//let hotelCollection = [...mockHotelCollection];

const characterListUrl = '/api/characters';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get<CharacterEntityApi[]>(characterListUrl);
  return data;
};
