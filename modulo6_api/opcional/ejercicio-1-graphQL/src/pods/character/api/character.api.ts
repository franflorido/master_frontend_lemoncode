import { gql } from 'graphql-request';
import { graphqlClient } from 'core/graphql';
import { Character } from './character.api-model';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = gql`
    query {
      character(id:  "${id}") {
        id
          name
          status
          species
          type
          origin {
            name
          }
          location {
            name
          }
          image
          episode {
            episode
          }
          created
      }
    }
  `;
  const { character } = await graphqlClient.request<GetCharacterResponse>(
    query
  );

  return character;
};
