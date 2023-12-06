"use client";
import React from "react";
import { motion } from "framer-motion";
type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
};
const ButtonMotion = ({ children, type, className, onClick }: ButtonProps) => {
  return (
    <motion.button type={type} className={className} onClick={onClick}>
      {children}
    </motion.button>
  );
};

export default ButtonMotion;
