import { APIurl, APIurlFav } from '../const/const'
import '../styles/App.css'
import { useEffect, useState } from 'react'
import Btn from './Btn'
import Img from './Img'
import Section from './Section'

function App () {
  const [rdmurls, setRdmUrls] = useState([''])
  const [favUrls, setFavUrls] = useState([''])
  const [loadingRdm, setLoadingRdm] = useState(1)

  const Fetchh = () => {
    fetch(APIurl)
      .then(res => res.json())
      .then(data => {
        setRdmUrls(data)
        setLoadingRdm(0)
      })
  }

  const FetchhFav = () => {
    fetch(APIurlFav)
      .then(res => res.json())
      .then(data => {
        setFavUrls(data)
      })
  }

  const LoadRandomDogs = () => {
    setLoadingRdm(1)
  }

  useEffect(() => {
    Fetchh()
  }, [])

  const updateImgFav = () => {
    LoadRandomDogs()
    FetchhFav()
  }

  const updateImg = () => {
    LoadRandomDogs()
    Fetchh()
  }

  const Fav = () => {
    if (favUrls[0] === '') {
      return (
        <h2>Uppss, no tienes favoritos</h2>
      )
    }
    return (
      <Img imgUrl={favUrls[0]} />
    )
  }

  if (loadingRdm === 1) {
    return (
      <>
        <div className='App'>
          <Section
            clssname='randomSection'
            title='Perritos aleatorios'
            flag={1}
            imgArray={[]}
          />

          <footer> Designed by <strong><span>Alejandro Ramírez</span></strong></footer>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='App'>
        <Section
          clssname='randomSection'
          title='Perritos aleatorios'
          flag={0}
          imgArray={rdmurls}
          updateImg={updateImg}
        />
        <Section
          clssname='FavoritesSection'
          title='Perritos Favoritos'
          flag={1}
          imgArray={[]}
          updateImg={updateImg}
        />
        {Fav()}
        <footer> Designed by <strong><span>Alejandro Ramírez</span></strong></footer>
      </div>
    </>
  )
}

export default App
