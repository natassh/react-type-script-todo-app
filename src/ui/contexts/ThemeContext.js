import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();

const ThemeProvider = props => {

  const getInitialState = () => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    console.log('userPrefersDark: ', userPrefersDark) // true o false
    console.log('userPrefersLight: ', userPrefersLight) // true o false

    if(userPrefersDark){
      return "dark"
    } else if(userPrefersLight) {
      return "light"
    }
  };
  const defaultTheme = 'dark';
  const [colorSchema, setColorSchema] = useState(getInitialState())
  console.log('colorSchema: ', colorSchema)



  React.useEffect(() => {
    console.log('colorSchema: ', colorSchema)
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
    console.log('aass', colorSchema)
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