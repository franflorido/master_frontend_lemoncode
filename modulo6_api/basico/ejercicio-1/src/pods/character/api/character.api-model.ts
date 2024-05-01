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
}
