export interface Character {
  id: string;
  name: string;
  status: string;
  species: number;
  type: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentences?: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: 1,
  type: '',
  origin: { name: '', url: '' },
  location: { name: '', url: '' },
  image: '',
  episode: [''],
  url: '',
  created: '',
  bestSentences: '',
});
