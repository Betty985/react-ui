import React from 'react';
import './index.css'
interface Mp4PlayerProps {
    children?: React.ReactNode
  }
const Mp4Player = ({ children }: Mp4PlayerProps) => {
    return <div className='Mp4Player'>
       {children}
    </div>
  }
export {Mp4Player}
     
