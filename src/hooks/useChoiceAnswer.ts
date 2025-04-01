import { useState } from "react";

export const useChoiceAnswer = (
  correctIndex: number,
  onNext: (isCorrect: boolean) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleChoice = (index: number) => {
    setSelectedIndex(index);
    const isCorrect = index === correctIndex;
    console.log(isCorrect);
    setTimeout(() => {
      onNext(isCorrect);
    }, 1000);
  };

  return { selectedIndex, handleChoice };
};
