// src/Pages/IntroPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './IntroPage.css';

const phrases = ['Too', 'Good', 'To', 'Go'];

export default function IntroPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setStep(0); // <-- Reset step when page is refreshed or mounted

    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 700);

    const redirect = setTimeout(() => {
      navigate('/landing');
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="intro-container">
      {phrases.slice(0, step + 1).map((word, index) =>
        index === step ? (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="intro-word"
          >
            {word}
          </motion.span>
        ) : (
          <span key={index} className="intro-word">
            {word}
          </span>
        )
      )}
    </div>
  );
}
