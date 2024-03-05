import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  console.log("Type:", type);

  return (
    <div
      className='parallax'
      id='About'
      ref={ref}
      style={{
        background:
          type === "about"
            ? " linear-gradient(180deg, #ced5f7, #494961)"
            : " linear-gradient(180deg, #0c0c1d, #ced5f7)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "about" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div
        className='planets'
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "portfolio" ? "/planets.png" : "/sun.png"
          })`,
          marginTop: "-300px",
          marginLeft: "50px",
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className='moon'></motion.div>
    </div>
  );
}

export default Parallax;
