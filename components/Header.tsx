'use client';

import { FileCode2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.div 
      className="text-center space-y-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center justify-center space-x-2 mb-4"
        animate={{ 
          rotateZ: [0, 10, -10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FileCode2 className="w-16 h-16 text-primary" />
      </motion.div>
      <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
        Figma to React Converter
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Transform your Figma designs into production-ready React components with just a few clicks
      </p>
    </motion.div>
  );
}