import { APIurl, APIurlFav, APIurlDelFav,APIkey } from '../const/const'
import '../styles/App.css'
import { useState } from 'react'
import Form from './Form'
import Section from './Section'
import useFetch from '../Hooks/useFetch'

function App () {
  
  const [rdmurls, setRdmUrls] = useState([''])
  const [favUrls, setFavUrls] = useState([''])
  const [loadRdm, setLoadingRdm] = useState(false)
  const [loadFav, setLoadingFav] = useState(false)
  let [loadingRdm]=useFetch(APIurl,setRdmUrls)
  const [loadingFav]=useFetch(APIurlFav, setFavUrls)


  const Fetch=(url, load, datas) =>{
    load(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        datas(data)
        load(false)

      })
      .catch(err => {

        alert(`Hubo un error ${err.status}`)
      })
  }
  

  const saveFav = (urlToSave) => {
    let id=""
    let validate=``
    rdmurls.map((imagen)=>{
      if(imagen.url===urlToSave){
        id=imagen.id
        validate=imagen.id;
      }
    })

    if(favUrls.find(e=>e.image_id===validate)){
      alert("Perrito existente en favoritos")
    }
    // else{return}
    else{
      fetch(APIurlFav,{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          image_id: id
        }
        )
      })
      .then(res => {
      })
      .finally(()=>{
        alert("Perrito agregado a favoritos")
        Fetch(APIurlFav, setLoadingFav, setFavUrls)
      })
      
    }
    }

  const deleteFav = (url) => {
   
    favUrls.map((imagen)=>
    {
      if(imagen.image.url===url){

        fetch(`${APIurlDelFav}${imagen.id.toString()}`,{
          method:'DELETE',
            headers: {
              'Content-Type':'application/json',
              'x-api-key' : APIkey
            },
            body: JSON.stringify({
            }
            )
          })
          .then(res => {
            
          })
          .catch(err => {
            console.log(err)
            alert(`Hubo un error ${err.status}`)
             }
           )
           .finally(()=>{
            alert("Perrito eliminado de favoritos")
            Fetch(APIurlFav, setLoadingFav, setFavUrls)
          })
        }
      }
      )
    }
    

      
    
  


  if(loadingRdm || loadingFav){
    return(
      <div className='App'>
        <h1>Cargando...</h1>
      </div>
    )
  }

  return(
    <div className='App'>
      <Section 
        clssname='randomSection'
        title='Perritos aleatorios'
        flag={loadRdm}
        imgArray={rdmurls}
        fun={Fetch}
        url={APIurl}
        setLoadValue={setLoadingRdm}
        setValue={setRdmUrls}
        imgBtnFunc={saveFav}
        boton={true}
        botonImg='Add'
      />
      {/* <Form
      
      /> */}
      <Section
        clssname='FavoritesSection'
        title='Perritos Favoritos'
        flag={loadFav}
        imgArray={favUrls}
        boton={false}
        botonImg='Rm'
        imgBtnFunc={deleteFav}
      />
      <footer> Designed by <strong><span>Alejandro Ramírez</span></strong></footer>
    </div>
  )
}

export default App
