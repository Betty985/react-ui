import React from 'react';
import './index.css'
export interface Mp4PlayerProps extends React.MediaHTMLAttributes<HTMLVideoElement> {
  url: string
}
const Mp4Player = ({ url, ...props }: Mp4PlayerProps) => {
  return (
    <video src={url} autoPlay controls {...props}>
      <source src={url} type="videl/mp4"></source>
      <track src={url} kind='captions' label='english_captions'></track>
    </video>
  )
}
export { Mp4Player }

