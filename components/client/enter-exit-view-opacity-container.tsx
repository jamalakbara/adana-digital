"use client"

// import { motion, useAnimation, useInView } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface EnterExitViewOpacityContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const EnterExitViewOpacityContainer: React.FC<EnterExitViewOpacityContainerProps> = ({ children, className }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  // const isInView = useInView(ref, { amount: "some" }); // 'some' means partial visibility

  useEffect(() => {
    const handleScroll = () => {
      const element = (ref.current as unknown) as HTMLElement;
      const rect = element.getBoundingClientRect();

      // Calculate the percentage of the element in the viewport
      const scrollTop = window.innerHeight;
      const elementHeight = rect.height;

      let visibleHeight;
      if (rect.top >= 0 && rect.bottom <= scrollTop) {
        // Element is fully in view
        visibleHeight = elementHeight;
      } else if (rect.top < 0) {
        // Element is partially scrolled past the top
        visibleHeight = rect.bottom;
      } else if (rect.bottom > scrollTop) {
        // Element is partially scrolled into view from the bottom
        visibleHeight = scrollTop - rect.top;
      } else {
        visibleHeight = 0;
      }

      const visibilityRatio = visibleHeight / elementHeight;
      controls.start({
        opacity: visibilityRatio,
        transition: { ease: 'easeInOut', duration: 0.5 },
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className={`h-screen transition-opacity duration-1000 ease-in-out ${className}`}
    >
      {children}
    </motion.div>
  );
};
