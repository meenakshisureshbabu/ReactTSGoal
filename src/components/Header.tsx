import React, { Children, PropsWithChildren, ReactNode } from 'react'

type HeaderText = PropsWithChildren<{image:{src:string,alt:string}}>
   

function Header({image,children}:HeaderText) {
  return (
    <div>
        <img src={image.src} alt={image.alt}></img>
        {children}
    </div>
  )
}

export default Header