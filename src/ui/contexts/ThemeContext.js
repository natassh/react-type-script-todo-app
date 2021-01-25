import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();

const ThemeProvider = props => {

  const getInitialState = () => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    // console.log('userPrefersDark: ', userPrefersDark) // true o false
    // console.log('userPrefersLight: ', userPrefersLight) // true o false

    if(userPrefersDark){
      return "dark"
    } else if(userPrefersLight) {
      return "light"
    }
  };

  const [colorSchema, setColorSchema] = useState(getInitialState())
  //console.log('colorSchema: ', colorSchema)

  const changeTheme = () => {
    const body = document.body;
    if(colorSchema === "dark") {
      body.classList.remove("darked")
      body.classList.add("lighted");
    }
    else {
      body.classList.remove("lighted")
      body.classList.add("darked");
    }
  }
  return (
    <ThemeContext.Provider
      value={{
        colorSchema,
        setColorSchema,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;