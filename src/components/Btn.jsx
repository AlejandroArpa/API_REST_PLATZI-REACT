import React from 'react'
import '../styles/Btn.css'

function Btn ({ children, fun, url, setValue, setLoadValue}) {
  return (
    <button className='update' onClick={() => fun (url,  setLoadValue,setValue)}>{children}</button>
  )
}

export default Btn
