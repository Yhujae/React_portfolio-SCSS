import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; 2023 Yhujae Dev</p>
      <div className='social'>
        <a href=''>
          <img src='/facebook.png' alt='' />
        </a>
        <a href=''>
          <img src='/instagram.png' alt='' />
        </a>
        <a href=''>
          <img src='/youtube.png' alt='' />
        </a>
        <a href=''>
          <img src='/dribbble.png' alt='' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
