
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeType } from './utils/Theme.style';


type Props = {
    theme:ThemeType
}

export const GlobalStyle = createGlobalStyle<Props>`
  body{
      background-color: ${({theme}) => theme.body};
      
    }
    *{
        box-sizing: border-box;
    }
  
`



export const SkeletonBox = styled.div<{width:string,height:string,borderRadius:string}>`
    width:${({width}) => width};
    height:${({height}) => height};
    border-radius:${({borderRadius}) =>  `${borderRadius}`}; 
`