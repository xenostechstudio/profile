"use client";

import { memo, useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText = memo(function TypingText({ 
  text, 
  className = "", 
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000 
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Pause before starting to type again
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, text, typingSpeed, deletingSpeed, pauseTime]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span 
        className={`inline-block w-0.5 h-6 ml-1 bg-current transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
});

export default TypingText;
