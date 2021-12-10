import { motion, Variants } from "framer-motion";

const variants: Variants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 }
};

interface ISectionProps {
  delay?: number;
}

const Section: React.FC<ISectionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay, duration: 0.5 }}
      className="mb-6"
    >
      {children}
    </motion.section>
  );
};

export default Section;
