export const getContainerWidth = (
  currentLength: number,
  totalStagesWithWords: number,
  maxLength: number
): string => {
  if (currentLength === 0) return "22%";
  if (currentLength === maxLength) return "45%";
  if (totalStagesWithWords <= 1) return "35%";
  if (totalStagesWithWords === 2) return "30%";
  return "33%";
};
