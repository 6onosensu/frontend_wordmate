import { FormattedWord } from "@/types/wordType";

export const isAudioTaskWithoutAudio = (
  word: FormattedWord
): boolean => {
  return [1, 3, 4].includes(word.repetitionCount) && !word.audio;
};
