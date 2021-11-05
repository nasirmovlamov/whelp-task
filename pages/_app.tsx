import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import '../global/scss/global.css'
import { Provider } from 'react-redux'
import {store} from '../app/store/store'
import { useEffect, useState } from 'react';
import {Toaster } from 'react-hot-toast'
import { GlobalStyle} from '../global/Global.style'
import Layout from '../app/components/Layout/Layout'
import ThemeSwitcher from '../app/components/Theme/ThemeSwitcher'
import { darkTheme, lightTheme } from '../global/utils/Theme.style'




function MyApp({ Component, pageProps }: AppProps) {
  const [theme, settheme] = useState("dark")
  useEffect(() => {
    if(localStorage.getItem('theme') !== null )
    {
      let theme =  ""
      if(localStorage.getItem('theme') === "light")
      {
        theme =  "light"
      }
      else 
      {
        theme =   "dark"
      }
      settheme(theme)
    }
    else 
    {
      settheme("light")
    }
    // console.log("%cDont try stupid things which you heard from uncle toms or etc!","font-size: 30px; color: red; -webkit-text-stroke:1px black; font-weight: bold;")
  }, [])


  
  const changeTheme = (theme:string) => {
    if(theme==="light")
    {
      settheme("dark")
      localStorage.setItem('theme' , "dark")
    }
    else 
    {
      settheme("light")
      localStorage.setItem('theme' , "light")
    }
  }

  return (
  <div style={{display:"flex"}}>
    <Provider store={store}> 
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <Toaster/>
          <GlobalStyle/>
          <Layout>  
              <ThemeSwitcher theme={theme} setTheme={changeTheme}/>
              <Component {...pageProps} />
          </Layout>
        </>
      </ThemeProvider>
    </Provider>
  </div>
  )
}

export default MyApp
