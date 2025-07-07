import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './IntroPage.css';
import { useNavigate } from 'react-router-dom';

const letters = "MINIMO".split('');

const IntroPage = () => {
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({
        y: "-100vh",
        transition: { duration: 1, ease: "easeInOut" }
      });
    }, 2500);

    const redirectTimer = setTimeout(() => {
      navigate('/landing');
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [controls, navigate]);

  return (
    <motion.div
      className="intro-motion-container"
      animate={controls}
      initial={{ y: 0 }}
    >
      <div className="letter-row">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="motion-letter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default IntroPage;
