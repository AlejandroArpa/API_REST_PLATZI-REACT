import React from 'react'
import Btn from './Btn'
import Img from './Img'
import '../styles/Section.css'
import { Grid } from '@mui/material'

function Section (props) {
  
  let imgs= true
  if (props.flag === true) {
    return (
      <section className={props.clssname}>
        <h1>{props.title}</h1>
        <div>
          <h2>Cargando...</h2>
        </div>
      </section>
    )
  }

  if(props.imgArray[0]!=undefined){
    imgs=true
  } else {
    imgs=false 
  }
  let Array=[]

  if(props.clssname ==='FavoritesSection'){
    props.imgArray.forEach(element =>
        Array.push(element.image.url)
      )
  } else {
    props.imgArray.forEach(element =>
      Array.push(element.url)
    )
  }

  return (
    <>
      <section className={props.clssname}>
        <h1 className='title'>{props.title}</h1>
        <div className='imgContainer'>
          <Grid container spacing={{xs:2, md:3}} 
          rowSpacing={1}
          columns={{xs:2, sm:5, md:12}}
          style={{maxWidth: '100%', justifyContent: 'center', margin:'0'}}>
              {imgs?
                Array.map((url) => (

                  <Grid item 
                  style={{padding:'0'}}
                  key={url}>
                    <Img
                      btn={props.botonImg}
                      imgUrl={url}   
                      funBtn={props.imgBtnFunc}     
                    />
                  </Grid>
                )
                )
              :
              <h1>Sin imagenes para mostrar</h1>
            }
              
            
          </Grid>
        </div>
      </section>
      {props.boton? 
      
      <Btn 
        fun={props.fun}
        url={props.url}
        setValue={props.setValue}
        setLoadValue={props.setLoadValue}
      >Recargar</Btn>:
      <></>
    }
    </>
  )
}

export default Section
