import { useState } from "react";

export const useChoiceAnswer = (
  correctIndex: number,
  onNext: (isCorrect: boolean) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleChoice = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    const isCorrect = index === correctIndex;
    if (isCorrect) {
      setTimeout(() => {
        onNext(true);
        setSelectedIndex(null);
      }, 700);
    }
  };

  const resetChoice = () => {
    setSelectedIndex(null);
    onNext(false);
  };

  return { 
    selectedIndex, 
    handleChoice,
    resetChoice, 
  };
};
