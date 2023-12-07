import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ModalMotion = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  const ondismiss = () => {
    router.push("/");
  };
  return (
    <motion.div ref={overlay} className="modal" onClick={handleClick}>
      <button className="absolute top-4 right-8" onClick={ondismiss}>
        <Image src="/close.svg" alt="close" width={17} height={17} />
      </button>
      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </motion.div>
  );
};

export default ModalMotion;
