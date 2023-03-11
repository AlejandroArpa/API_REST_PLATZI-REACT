import React from 'react'
import Btn from './Btn'
import Img from './Img'
import '../styles/Section.css'

function Section (props) {
  if (props.flag === 1) {
    return (
      <section className={props.clssname}>
        <h1>{props.title}</h1>
        <div>
          <h2>Cargando...</h2>
        </div>
      </section>
    )
  }
  return (
    <>
      <section className={props.clssname}>
        <h1 className='title'>{props.title}</h1>
        <div className='imgContainer'>
          <div>
            {props.imgArray.map((imagen, index) => (

              <Img
                imgUrl={props.imgArray[index].url}
                key={props.imgArray[index].id}
              />
            )
            )}
          </div>
        </div>
      </section>
      <Btn updateImg={props.updateImg}>Recargar</Btn>
    </>
  )
}

export default Section
