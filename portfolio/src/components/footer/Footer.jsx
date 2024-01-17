import "./Footer.scss";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const emailAddress = "fabbyent@gmail.com";
  return (
    <div className='footer'>
      <p>&copy; 2023 Yhujae Dev</p>
      <div className='social'>
        <a
          href={`mailto:${emailAddress}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaWhatsapp />
        </a>
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
  );
};

export default Footer;
