import { FormattedWord, UserWord } from "@/types/wordType";

export const formatUserWords = (rawWords: UserWord[]): FormattedWord[] => {
  return rawWords.map((word) => ({
    id: word.id,
    word: word.meaning.word.word ?? "Word is undefined",
    audio: word.meaning.word.audio ?? null,
    definition: word.meaning.definition ?? "Definition is undefined",
    partOfSpeech: word.meaning.partOfSpeech.title ?? "Part of speech is undefined",
    synonyms: word.meaning.synonyms ?? [],
    antonyms: word.meaning.antonyms ?? [],
    example: word.meaning.example ?? "-",
    repetitionCount: word.repetitionCount,
  }));
};