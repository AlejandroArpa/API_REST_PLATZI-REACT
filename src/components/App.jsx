import {APIurl} from "../const/const"
import '../styles/App.css'
import { useEffect, useState } from "react"
import Btn from "./Btn";
import Img from "./Img";


function App() {
  const [isLoading,setIsLoading] = useState(true); 
  const [isLoading1,setIsLoading1] = useState(true); 
  const [isLoading2,setIsLoading2] = useState(true); 
  const [imgUrl1, setImgUrl1] = useState(null);
  const [imgUrl2, setImgUrl2] = useState(null);
  const [imgUrl3, setImgUrl3] = useState(null);

  const Fetchh = () =>{
    fetch(APIurl)  
      .then(res => res.json())
      .then(data => {
        setImgUrl1(data[0].url);
        setIsLoading1(false);
      });
      fetch(APIurl)  
      .then(res => res.json())
      .then(data => {
        setImgUrl2(data[0].url);
        setIsLoading2(false);
      });
      fetch(APIurl)  
      .then(res => res.json())
      .then(data => {
        setImgUrl3(data[0].url);
        setIsLoading3(false);
      });
  }

  const Loading = () => {
    setIsLoading2(true);
    setIsLoading1(true);
  }

  useEffect(() => {
    Fetchh();
  }, [])

  const updateImg = () => {
    Loading();
    Fetchh();
  }
  
  if(isLoading1 || isLoading2){
    return(

      <div className="App">
        <h1>Cargando</h1>
      </div>
    ) 
  }

  return (
    <>
      <div className="App">
        <section className="randomSection">
          <h1>Perritos Aleatorios</h1>
          <div>
            <Img imgUrl = {imgUrl1}/>
            <Img imgUrl = {imgUrl2}/>
          </div>
          <Btn updateImg={updateImg}>Recargar</Btn>
        </section>
      </div>
    </>
  )
}

export default App
