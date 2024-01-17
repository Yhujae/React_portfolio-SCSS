import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};
function Hero() {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>PRECIOUS ROBERTS</motion.h2>
          <motion.h1 variants={textVariants}>
            Front-End React Developer and UI Designer
          </motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}>
              See my Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate='scrollButton'
            src='/mouse-cursor.png'
            alt=''
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Developer Designer Programmer Dreamer
      </motion.div>
      <div className='imageContainer'>
        <img src='/profile5.png' alt='' />
      </div>
    </div>
  );
}

export default Hero;
