import React, {useState, useEffect } from "react";

const useFetch = (url, setState) =>{
  const [data,setData]=useState([])
  const [loading, setLoading]=useState(true)
  useEffect(()=>{
    setLoading(true)
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data)
      setState(data)
      // console.log(data)
    })
    .catch(err => {

    })
    .finally(()=>
      setLoading(false)
    )
  },[])

  return [loading]
  }

export default useFetch;