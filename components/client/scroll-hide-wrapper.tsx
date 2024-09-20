"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollHideWrapperProps {
  children: React.ReactNode;
  hideAt: number | string; // hideAt can be a string like "50vh"
}

const ScrollHideWrapper: React.FC<ScrollHideWrapperProps> = ({ children, hideAt }) => {
  const { scrollY } = useScroll(); // track the scroll position
  const [hideAtPx, setHideAtPx] = useState<number>(0);

  // Function to convert "vh" to pixels
  const convertToPixels = (value: number | string): number => {
    if (typeof value === "string") {
      if (value.includes('vh')) {
        const vhValue = parseFloat(value);
        return (vhValue / 100) * window.innerHeight;
      }
      return parseFloat(value);
    }
    // If no "vh", assume it's in pixels and parse as a number
    return value;
  };

  // Convert hideAt to pixels whenever the component mounts or hideAt changes
  useEffect(() => {
    const hideAtValue = convertToPixels(hideAt);
    console.log({ hideAtValue })
    setHideAtPx(hideAtValue);

    const handleResize = () => {
      // Recalculate on window resize for responsiveness
      setHideAtPx(convertToPixels(hideAt));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hideAt]);

  // Interpolation for opacity and translateY based on scrollY value
  const opacity = useTransform(scrollY, [hideAtPx - 50, hideAtPx], [1, 0]); // Slightly delay the start
  const translateY = useTransform(scrollY, [hideAtPx - 50, hideAtPx], [0, -20]); // Small upward shift

  return (
    <motion.div
      style={{ opacity, y: translateY }} // Animate opacity and translate
      initial={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }} // Smooth ease-in-out transition
    >
      {children}
    </motion.div>
  );
};

export default ScrollHideWrapper;
