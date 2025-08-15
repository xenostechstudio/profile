"use client";

import { memo, useEffect, useState } from "react";

interface WordConfig {
  word: string;
  badge?: string;
  badgeColor?: string;
}

interface TypingWordsProps {
  words: WordConfig[];
  className?: string;
  badgeClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  wordPauseTime?: number;
}

const TypingWords = memo(function TypingWords({ 
  words,
  className = "",
  badgeClassName = "",
  typingSpeed = 120,
  deletingSpeed = 80,
  pauseTime = 2000,
  wordPauseTime = 3000
}: TypingWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (displayText.length < currentWord.word.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.word.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, wordPauseTime);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Move to next word and start typing again
        timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setIsTyping(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentWord, words.length, typingSpeed, deletingSpeed, pauseTime, wordPauseTime]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-flex items-center gap-3">
      <span className={className}>
        {displayText}
        <span 
          className={`inline-block w-0.5 h-6 ml-1 bg-current transition-opacity duration-100 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </span>
      {currentWord.badge && displayText === currentWord.word && (
        <span 
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${badgeClassName}`}
          style={{
            backgroundColor: currentWord.badgeColor || '#13bfb5',
            color: 'white'
          }}
        >
          {currentWord.badge}
        </span>
      )}
    </span>
  );
});

export default TypingWords;
