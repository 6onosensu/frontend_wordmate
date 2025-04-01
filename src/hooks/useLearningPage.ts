import { useLocation, useNavigate } from "react-router-dom";
import { FormattedWord } from "@/types/wordType";
import { useState } from "react";

const useLearningPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const title = location.state?.title;
  const words: FormattedWord[] = location.state?.words || [];
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
    }    
  };

  const handleNavigate = () => {
    if (words.length > 0) {
      navigate("/LearningController", { 
        state: { words } 
      });
    } else {
      navigate("/dashboard");
    }
  };

  return {
    words,
    title,
    expandedRow,
    handleRowClick,
    handleNavigate,
  };
};

export default useLearningPage;
