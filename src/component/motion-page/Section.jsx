import { motion,useAnimation  } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

Section.propTypes = {
  children: PropTypes.node.isRequired, // children harus ada
  className: PropTypes.string,
  id: PropTypes.string,
};

const sectionVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Section({ children, className, id }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Restart animasi saat keluar viewport
    }
  }, [inView, controls]);

  return (
    <motion.section 
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className={className}
      id={id}>
      {children}
    </motion.section>
  );
}
