import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "/pexels-1.jpg",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eius. Harum, obcaecati nemo in totam reprehenderit. ",
  },
  {
    id: 2,
    title: "React.js App",
    img: "/pexels-1.jpg",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eius. Harum, obcaecati nemo in totam reprehenderit. ",
  },

  {
    id: 3,
    title: "Todo App",
    img: "/todo.jpg",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eius. Harum, obcaecati nemo in totam reprehenderit. ",
  },

  {
    id: 4,
    title: "Music App",
    img: "/pexels-1.jpg",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eius. Harum, obcaecati nemo in totam reprehenderit. ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
