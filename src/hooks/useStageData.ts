import { useEffect, useMemo } from "react";
import { useWords } from "@/context/WordContext";
import { formatUserWords } from "@/utils/format/formatUserWords";
import { getContainerWidth } from "@/utils/getContainerWidth";

export const useStageData = (stageKey: string) => {
  const { words, refreshWords, loading } = useWords();

  useEffect(() => {
    refreshWords(stageKey);
  }, [stageKey]);

  const list = words?.[stageKey] || [];

  const formattedWords = useMemo(() => {
    return formatUserWords(list);
  }, [list]);

  const totalStagesWithWords = Object.values(words)
    .filter(w => w?.length > 0).length;

  const allLengths = Object.values(words)
    .map(l => l?.length || 0);
  const maxLength = Math.max(...allLengths);

  const containerWidth = getContainerWidth(
    formattedWords.length,
    totalStagesWithWords,
    maxLength
  );

  return {
    formattedWords,
    containerWidth,
    loading,
    list
  };
};
