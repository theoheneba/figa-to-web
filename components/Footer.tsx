'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer 
      className="text-center py-4 border-t backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center space-x-2">
        <p className="text-sm text-muted-foreground">Developed by Celeteck</p>
        <motion.div 
          className="relative w-8 h-5 transform hover:scale-110 transition-transform"
          whileHover={{ scale: 1.2 }}
          animate={{
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Y shape */}
          <div className="absolute inset-0 border-[1px] border-[#000000]">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-[#E03C31]"></div>
            <div className="absolute top-1/3 left-0 w-full h-1/3 bg-[#FFFFFF]"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#001489]"></div>
            {/* Chevron */}
            <div className="absolute top-0 left-0 h-full w-1/3 bg-[#007749]"></div>
            <div className="absolute top-0 left-1/6 h-full w-1/12 bg-[#FFB81C]"></div>
            <div className="absolute top-0 left-1/4 h-full w-1/12 bg-[#000000]"></div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}