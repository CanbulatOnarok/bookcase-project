import CardList from "./components/CardList";
import Form from "./components/Form";
import Navi from "./components/Navi";
import "./style/app.css"
import { useEffect, useState } from "react";



function App() {
  const[kitaplar,setKitaplar] = useState([])

  const yeniKitap = (yeni)=>{
    // setKitaplar([...kitaplar,yeni]);
    setKitaplar(prev=>[...prev,yeni]);
  }

  const kitapSil = (id)=>{
    // setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id!==id));
    setKitaplar(prev=>prev.filter(statedenGelen=>statedenGelen.id!==id));
  }

  const kitaplariGetir = async ()=> {
      let url = "http://localhost:3005/kitaplar";
      const response = await fetch(url);
      const kitaplar = await response.json();
      setKitaplar(kitaplar);
      console.log(kitaplar);
  }

  useEffect(()=>{
    kitaplariGetir()
  },[])


  return (
    <>  
      <Navi />
      <Form kitaplar ={kitaplar} yeniKitap={yeniKitap} />
      <CardList kitaplar={kitaplar} kitapSil={kitapSil}/>
      <h3 style={{color:"red",backgroundColor:"greenyellow"}}>BilgeAdam Akademi</h3>  
    </>
  );
}

export default App;