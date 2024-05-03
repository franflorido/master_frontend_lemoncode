import { gql } from 'graphql-request';
import { graphqlClient } from 'core/graphql';
import { CharacterEntityApi } from './character-collection.api-model';

interface Result {
  results: CharacterEntityApi[];
}

interface GetCharacterCollectionResponse {
  characters: Result;
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
    query {
      characters() {
        results {
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
    }
  `;
  const { characters } =
    await graphqlClient.request<GetCharacterCollectionResponse>(query);
  console.log(characters);
  const { results } = characters;
  return results;
};
