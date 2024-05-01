import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
//import { mockCities, mockHotelCollection } from './hotel.mock-data';

const characterListUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${characterListUrl}/${id}`);
  return data;
};
