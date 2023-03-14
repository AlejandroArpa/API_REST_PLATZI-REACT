import React from 'react'
import '../styles/Img.css'

function Img ({ imgUrl, btn, funBtn }) {
  let txt=''
  if(btn==='Add') {
    txt='+'
  }  else{
    txt='-'
  }

  const Onclick = () =>{
    funBtn(imgUrl)
  }
  
  return (
    <div className='ImgContainer'>
      <img className='imagen' src={imgUrl} />
      <button className={`${btn} BTN`} onClick={Onclick}>{txt}</button>
    </div>
  )
}

export default Img
