import React, {useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './LightDarkMode.css';
import iconMoon from '../../assets/images/icon-moon.svg';
import iconSun from '../../assets/images/icon-sun.svg';

function LightDarkMode() {
  const { colorSchema, changeTheme } = useContext(ThemeContext);

  const handleOnClick = () => {
    if(colorSchema === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  }
  return (
    <a href="#" className="LightDarkMode" onClick={handleOnClick}>
      <figure>
        {colorSchema === "light" ? (
          <img src={iconMoon} alt="Icono luna" />
        ) : (
          <img src={iconSun} alt="Icono sol" />
        )}
      </figure>
    </a>
  ) 
}
export default LightDarkMode;
