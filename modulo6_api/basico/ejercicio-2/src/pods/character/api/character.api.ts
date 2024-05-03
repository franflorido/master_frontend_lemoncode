import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
//import { mockCities, mockHotelCollection } from './hotel.mock-data';

const characterListUrl = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${characterListUrl}/${id}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  // Guardar un hotel nuevo con fetch
  //Update
  console.log(character.id);
  if (character.id) {
    await Axios.put(`${characterListUrl}/${character.id}`, character);
  } else {
    //insert
    await Axios.post(characterListUrl, character);
  }
  return true;
};
