import React from 'react';
import './index.css'
export interface AlertProps {
    children?: React.ReactNode
  }
const Alert = ({ children }: AlertProps) => {
    return (
    <div className='Alert'>
       {children}
    </div>
   )
  }
export {Alert}
     
