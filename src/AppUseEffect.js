import React, { useEffect, useState } from 'react'

const App = () => {
  const[isim,setIsim] = useState("Ziyaretçi");
  const[sayac,setSayac] = useState(0);

  // useEffect(()=>{
  //   //yapılacak iş
  // },[])


  // useEffect(()=>{

  //   console.log("Components did mount!!");
  // })
  //eğer bir dependency array yazılmazsa sayfa yüklendiğinde 1 kere çalışır ve herhangi bir state değişiklikte tekrar tetiklenir.
  // useEffect(()=>{
  //   console.log("Components did mount!!");
  // },[])
  // //dependency array boş yazıldığında 1 kereye mahsus çalışır.
  // useEffect(()=>{
  //   console.log("sayac state'i değişti!!");
  // },[sayac])
  // useEffect(()=>{
  //   console.log("isim state'i değişti!!");
  // },[isim])
  // useEffect(()=>{
  //   console.log("ortak çalıştı!!");
  // },[isim,sayac])
  //dependency array dolu iken sayfa yüklendiğinde 1kere çalışır array içine yazılan state her değiştiğinde tekrar tetiklenir.
  useEffect(()=>{
    console.log("isim state'i değişti!!")
    return ()=>{
      console.log("Component will unmount");
    }
  },[isim])

  return (
   <>
    <h3>Hoşgeldiniz {isim}</h3>
    <button onClick={()=>setSayac(sayac-1)} >AZALT</button>
    {sayac}
    <button onClick={()=>setSayac(sayac+1)}>ARTTIR</button>
    <button onClick={()=>setIsim("eSb")}>Değiştir</button>
   </>
  )
}

export default App