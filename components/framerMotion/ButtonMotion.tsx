"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
  onClick?: () => void;
  disabled?: boolean;
};
const ButtonMotion = ({
  children,
  type,
  className,
  onClick,
  leftIcon,
  rightIcon,
  disabled,
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={`flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium max-md:w-full bg-primary-purple text-white ${
        className ?? null
      }`}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {leftIcon && (
        <Image src={leftIcon} alt="leftIcon" width={20} height={20} />
      )}
      {children}
      {rightIcon && (
        <Image src={rightIcon} alt="rightIcon" width={20} height={20} />
      )}
    </motion.button>
  );
};

export default ButtonMotion;
