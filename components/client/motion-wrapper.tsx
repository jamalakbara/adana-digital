"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MotionWrapper({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: { [key: string]: string | number }
}) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
      className={className}
      style={style || {}}
    >
      {children}
    </motion.div>
  );
}
