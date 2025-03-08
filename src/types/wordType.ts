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