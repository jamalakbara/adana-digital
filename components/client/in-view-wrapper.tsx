"use client"

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface InViewWrapperProps {
  children: React.ReactNode;
  duration?: number;
}

const InViewWrapper: React.FC<InViewWrapperProps> = ({ children, duration }) => {
  const [isInView, setIsInView] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is in view
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0 }} // Initially hidden
      animate={{ opacity: isInView ? 1 : 0 }} // Fade in/out based on visibility
      transition={{ duration: duration || 0.3 }} // 200ms transition
    >
      {children}
    </motion.div>
  );
};

export default InViewWrapper;
