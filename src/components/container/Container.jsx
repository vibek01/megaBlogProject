// src/container/Container.jsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Container({ children, className = '' }) {
  return (
    <motion.div
      className={`w-full max-w-7xl mx-auto px-4 ${className}`}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}