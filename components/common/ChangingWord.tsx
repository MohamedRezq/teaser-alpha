"use client";
import { useState, useEffect } from "react";

const ChangingWord = () => {
  const words = ["Monitor", "Assess", "Refine", "Enhance"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="text-apple inline-block changing-word">{currentWord}</div>
  );
};

export default ChangingWord;
