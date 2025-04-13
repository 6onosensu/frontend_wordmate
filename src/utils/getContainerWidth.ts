export const getContainerWidth = (
  currentLength: number,
  totalStagesWithWords: number,
  maxLength: number
): string => {
  const isEmpty = currentLength === 0;
  if (isEmpty) return "22%";

  const isMax = currentLength === maxLength;
  if (isMax && totalStagesWithWords === 3) return "45%";
  if (!isMax && totalStagesWithWords === 3) return "33%";

  if (totalStagesWithWords === 2) return isMax ? "40%" : "30%";
  if (totalStagesWithWords === 1) return "52%";

  return "33%";
};
