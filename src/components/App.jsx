import {APIurl} from "../const/const"
import '../styles/App.css'
import { useEffect, useState } from "react"
import Btn from "./Btn";
import Img from "./Img";


function App() {
  const [isLoading,setIsLoading] = useState(true); 
  const [imgUrl1, setImgUrl1] = useState(null);
  const [imgUrl2, setImgUrl2] = useState(null);
  const [imgUrl3, setImgUrl3] = useState(null);

  const Fetchh = () =>{
    fetch(APIurl)  
      .then(res => res.json())
      .then(data => {
        setImgUrl1(data[0].url);
        setIsLoading(false);
      });
      fetch(APIurl)  
      .then(res => res.json())
      .then(data => {
        setImgUrl2(data[0].url);
        setIsLoading(false);
      });
      fetch(APIurl)  
      .then(res => res.json())
      .then(data => {
        setImgUrl3(data[0].url);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    Fetchh();
  }, [])

  const updateImg = () => {
    setIsLoading(true);
    Fetchh();
  }
  
  if(isLoading){
    return(

      <div className="App">
        <h1>Cargando Pa</h1>
      </div>
    ) 
  }

  return (
    <div className="App">
      <h1>Perritos Aleatorios</h1>
      <Img imgUrl = {imgUrl1}/>
      <Img imgUrl = {imgUrl2}/>
      <Btn updateImg={updateImg}>Recargar</Btn>
    </div>
  )
}

export default App
