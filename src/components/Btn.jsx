import React from 'react'
import '../styles/Btn.css'

function Btn ({ children, updateImg }) {
  return (
    <button className='update' onClick={() => updateImg()}>{children}</button>
  )
}

export default Btn
