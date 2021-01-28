import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();

const ThemeProvider = props => {

  const getInitialState = () => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if(userPrefersDark){
      return "dark"
    } else if(userPrefersLight) {
      return "light"
    }
  };
  const defaultTheme = 'dark';
  const [colorSchema, setColorSchema] = useState(getInitialState())

  React.useEffect(() => {
    changeTheme(colorSchema)
    const preferDarkQuery = `(prefers-color-scheme: ${defaultTheme})`
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const handleChange = () => {
      setColorSchema(mediaQuery.matches ? 'dark' : 'light')
      changeTheme(mediaQuery.matches ? 'dark' : 'light')
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
 
  const changeTheme = theme => {
    const body = document.body;
    if(theme === "dark") {
      body.classList.remove("lighted")
      body.classList.add("darked");
     
    }
    else {
      body.classList.remove("darked")
      body.classList.add("lighted");
    }
    setColorSchema(theme);
  }
  return (
    <ThemeContext.Provider
      value={{
        colorSchema,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;