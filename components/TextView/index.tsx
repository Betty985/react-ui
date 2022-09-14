import React from 'react';
import './index.css'

interface TextViewProps {
  children?: React.ReactNode
}

const TextView = ({ children }: TextViewProps) => {
  return <div className='text-view'>
    {children}
  </div>
}

export default TextView;