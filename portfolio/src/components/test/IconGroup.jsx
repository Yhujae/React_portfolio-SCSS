import "./testing.scss";

const IconGroup = () => {
  // const [activeIcon, setActiveIcon] = useState(null);

  // const handleIconHover = (iconId) => {
  //   setActiveIcon(iconId);
  // };

  // const handleIconLeave = () => {
  //   setActiveIcon(null);
  // };

  return (
    <div className='iconContainer'>
      {/* {icons.map((icon) => (
        <div
          key={icon.id}
          className={`icon ${activeIcon === icon.id ? "active" : ""}`}
          onMouseEnter={() => handleIconHover(icon.id)}
          onMouseLeave={handleIconLeave}
        >
          <img src='/youtube.png' alt={icon.name} />
          <div className='iconDetails'>
            <span className='iconName'>{icon.name}</span>
            <span className='background'></span>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default IconGroup;
