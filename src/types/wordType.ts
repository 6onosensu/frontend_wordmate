export interface DictionaryAPIResponse {
  word: string;
  phonetics: { text?: string; audio?: string }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms: string[];
      antonyms: string[];
    }[];
  }[];
}

export interface FormattedDataType {
  word: string;
  audio?: string | null;
  partOfSpeech: string;
  definition: string;
  example?: string | null;
  synonyms?: string[];
  antonyms?: string[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  countryName?: string;
  number?: string;
  pictureUrl?: string;
}

interface Status {
  id: number;
  status: string;
}

interface PartOfSpeech {
  id: number;
  title: string;
}

interface Word {
  id: number;
  word: string;
  audio?: string | null;
}

interface Meaning {
  id: number;
  definition: string;
  example?: string | null;
  synonyms?: number[] | null;
  antonyms?: number[] | null;
  partOfSpeech: PartOfSpeech;
  word: Word; 
}

export interface UserWord {
  id: number;
  createdAt: string;
  updatedAt: string;
  repetitionDate: string;
  due: boolean;
  repetitionCount: number;
  intervalRepetitions: number;
  meaning: Meaning; 
  status: Status;
  user: User;
}

export interface FormattedWord {
  id: number;
  word: string;
  audio?: string | null;
  definition: string;
  partOfSpeech: string;
  synonyms?: number[] | null;
  antonyms?: number[] | null;
  example?: string | null;
  repetitionCount: number;
}