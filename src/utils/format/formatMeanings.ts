import { Meaning, FormattedWord } from "@/types/wordType";

export const formatMeanings = (meanings: Meaning[]): FormattedWord[] =>
  meanings.map((m): FormattedWord => ({
    id: m.id,
    word: m.word.word,
    audio: m.word.audio ?? null,
    definition: m.definition,
    partOfSpeech: m.partOfSpeech.title,
    synonyms: m.synonyms,
    antonyms: m.antonyms,
    example: m.example,
    repetitionCount: 0,
    status: "",
}));
