import { Meaning, FormattedWord } from "@/types/wordType";

export const formatMeanings = (meanings: Meaning[]): FormattedWord[] =>
  meanings.map((m): FormattedWord => ({
    id: m.id,
    word: m.word,
    audio: m.word ?? null,
    definition: m.definition,
    partOfSpeech: m.partOfSpeech,
    synonyms: m.synonyms,
    antonyms: m.antonyms,
    example: m.example,
    repetitionCount: 0,
    status: "",
}));
