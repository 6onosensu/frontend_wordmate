export const getFeedbackColor = (
  selectedIndex: number | null,
  correctIndex: number,
  currentIndex: number
): string => {
  if (selectedIndex === null) return "white";

  if (currentIndex === correctIndex) return "#C8E6C9";
  if (currentIndex === selectedIndex) return "#FFCDD2";

  return "white";
};
