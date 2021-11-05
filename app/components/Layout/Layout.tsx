import React, { ReactElement, FC, useEffect } from 'react'
import {LayoutStyle} from './style/Layout.style'
interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
    
    

    return (
    <LayoutStyle>
        {children}
    </LayoutStyle>
    )
}

export default Layout


