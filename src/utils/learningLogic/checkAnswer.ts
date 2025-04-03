export const checkAnswer = (
  input: string, 
  correct: string
): boolean => {
  return input.trim().toLowerCase() === correct.trim().toLowerCase();
};