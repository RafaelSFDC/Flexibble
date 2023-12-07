"use client";
import React from "react";
import { motion } from "framer-motion";
type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
};
const ButtonMotion = ({ children, type, className, onClick }: ButtonProps) => {
  return (
    <motion.button
      type={type}
      className={className}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.button>
  );
};

export default ButtonMotion;
