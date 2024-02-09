import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Portfolio",
    img: "/portfolio.jpg",
    desc: "  Created a functional web-based portfolio on the frontend, styled with Tailwind CSS. ",
    liveLink: "https://github.com/Yhujae/portfolio_tailwind",
  },
  {
    id: 2,
    title: "Landing Page",
    img: "/fashion.jpg",
    desc: "   Developed a frontend Landing page written in react and styled using bootstrap CSS ",
    liveLink: "https://github.com/Yhujae/my_project",
  },

  {
    id: 3,
    title: "Todo App",
    img: "/todo.jpg",
    desc: "  A simple Todo app written in react and javascript, and styled using CSS.",
    liveLink: "https://github.com/Yhujae/todo_app",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const handleliveLinkClick = () => {
    window.open(item.liveLink, "_blank");
  };

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
            <button onClick={handleliveLinkClick}>See Live Link</button>
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
