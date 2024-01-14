import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      ref={ref}
      animate={"animate"}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I specialize in advancing your brand's growth and guiding it
          confidently <br /> into the future
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/meeting.jpg' alt='' />
          <h1>
            <motion.b whileHover={{ color: "#e6bf32" }}>Unique </motion.b>
            Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: "#e6bf32" }} b>
              For Your
            </motion.b>{" "}
            Business
          </h1>

          <motion.button
            whileHover={{
              backgroundColor: "#caa623",
              border: "none",
              color: "black",
              fontWeight: "400",
              scale: 1.1,
            }}
          >
            WHAT WE DO
          </motion.button>
          <hr />
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ backgroundColor: "#0c0c1dae", color: "white" }}
        >
          <h2>Web App Development</h2>
          <p>
            Developing web applications with frameworks such as React.js,
            implementing robust state management for complex applications, and
            seamlessly integrating with backend services and APIs.
          </p>

          <div className='buttonContainer'>
            <div className='line'></div>
            <button>Go</button>
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ backgroundColor: "#0c0c1dae", color: "white" }}
        >
          <h2>User Interface (UI) Design</h2>
          <p>
            Specialize in designing visually appealing and user-friendly
            interfaces, creating wireframes and prototypes, and implementing
            design principles to enhance the overall user experience.
          </p>
          <div className='buttonContainer'>
            <div className='line'></div>
            <button>Go</button>
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ backgroundColor: "#0c0c1dae", color: "white" }}
        >
          <h2>Website Development</h2>
          <p>
            Create the structure and layout of web pages, implement responsive
            design for mobile and tablet devices, and build interactive and
            dynamic user interfaces
          </p>
          <div className='buttonContainer'>
            <div className='line'></div>
            <button>Go</button>
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ backgroundColor: "#0c0c1dae", color: "white" }}
        >
          <h2>Frontend Frameworks</h2>
          <p>
            Working with popular frontend frameworks and libraries while also
            utilizing component-based architecture for modular development.
          </p>
          <div className='buttonContainer'>
            <div className='line'></div>
            <button>Go</button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
