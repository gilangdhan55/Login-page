import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Section({ children, className, id }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${className}`}
      id={id}
    >
      {children}
    </motion.section>
  );
}
