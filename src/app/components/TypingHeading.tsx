"use client";
import React, { useState, useEffect } from 'react';

const TypingHeading = () => {
  const texts = ["Just Do it!", "Tasks, tackled!", "Conquer your day!"];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(200);
  const [delay, setDelay] = useState(1500);

  useEffect(() => {
    let typingSpeed = isDeleting ? speed / 2 : speed;

    const handleTyping = setTimeout(() => {
      const fullText = texts[index];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));

        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));

        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [text, isDeleting, index, speed, delay]);

  return (
    <div className="typing-container">
      <h1 className="typing-heading">{text}</h1>
    </div>
  );
};

export default TypingHeading;
