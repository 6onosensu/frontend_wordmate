import { FormattedWord, UserWord } from "@/types/wordType";

export const formatUserWords = (rawWords: UserWord[]): FormattedWord[] => {
  return rawWords.map((word) => ({
    id: word.id,
    word: word.meaning.word,
    audio: word.meaning.audio ?? null,
    definition: word.meaning.definition,
    partOfSpeech: word.meaning.partOfSpeech,
    synonyms: word.meaning.synonyms ?? [],
    antonyms: word.meaning.antonyms ?? [],
    example: word.meaning.example ?? "-",
    repetitionCount: word.repetitionCount,
    status: word.status.status,
  }));
};