  

export const lightTheme = {
  body: "white",
  text: 'black',
  toggleBorder: '#FFF',
  toggleTheme:"0px",
  toggleThemeColor:"#00090E",
  themeTogglerCont: "#FFFFFF",
  themeTogglerContBorder: "black",

  
  boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
  borderColor:'light-gray',
  borderColorActive:'gray',
  svg:'gray',

  
}
export const darkTheme = {
  body: 'black',
  text: 'white',


  toggleBorder: '#6B8096',
  toggleTheme:"31px",
  toggleThemeColor:"#00090E",
  themeTogglerCont:"#00090E",
  themeTogglerContBorder: "00090E",


  boxShadow:'rgba(255, 255, 255, 0.24) 0px 3px 8px;',
  borderColor:'rgba(255,255,255,0.1)',
  borderColorActive:'rgba(255,255,255,0.4)',
  svg:'gray',


}


  export type ThemeType = typeof lightTheme
