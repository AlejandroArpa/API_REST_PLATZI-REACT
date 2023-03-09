import React from 'react'
import "../styles/Img.css"

function Img({imgUrl}) {
  return (
    <img className='imagen' src = {imgUrl}/>
  )
}

export default Img