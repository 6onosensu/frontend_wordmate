import { User } from "./userType";

export interface BaseWord {
  word: string;
  audio?: string | null;
}

export interface MeaningBase {
  definition: string;
  example?: string | null;
  synonyms?: string[] | null;
  antonyms?: string[] | null;
}

export interface FormattedWord extends BaseWord, MeaningBase {
  id: number;
  partOfSpeech: string;
  repetitionCount: number;
  status: string;
}

export interface saveNewWordType extends BaseWord, MeaningBase {
  partOfSpeech: string;
}

export interface Word extends BaseWord {
  id: number;
}

export interface Meaning extends MeaningBase {
  id: number;
  partOfSpeech: string;
  word: string; 
  audio?: string | null;
}

interface Status {
  id: number;
  status: string;
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
