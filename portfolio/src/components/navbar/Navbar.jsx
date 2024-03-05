import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
function Navbar() {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Yhujae Dev
        </motion.span>
        <div className='social'>
          <a
            href='https://github.com/yhujae'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/precious-roberts-404a37254'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
