import axios from "axios";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Navi from "./components/Navi";
import "./style/app.css"
import { useEffect, useState } from "react";



function App() {
  const [kitaplar, setKitaplar] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);
  const [secilenKategori,setSecilenKategori]=useState("");

  const yeniKitap = async (yeni) => {
    // setKitaplar([...kitaplar,yeni]);
    // setKitaplar(prev => [...prev, yeni]);
    let url ="http://localhost:3005/kitaplar"
    const response=await axios.post(url,yeni);
    console.log(response);
    setKitaplar(prev => [...prev, yeni]);
    
  }

  const kitapSil =async (id) => {
    // setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id!==id));
    // setKitaplar(prev => prev.filter(statedenGelen => statedenGelen.id !== id));
    let url=`http://localhost:3005/kitaplar/${id}`;
    const response= await axios.patch(url,{isDeleted:true})
    console.log(response);
    if(response.status===200)
    setKitaplar(prev => prev.filter(statedenGelen => statedenGelen.id !== id));
  }

  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    if(secilenKategori && secilenKategori!=="Tüm Kitaplar"){
      // url=url + "?kitapKategori="+secilenKategori
      url+="?kitapKategori="+secilenKategori
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar);
  }


  // npm i axios
  const kategorileriGetir = async () => {
    let url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = response.data;
    setKategoriler(kategoriler)
  }

  useEffect(() => {
    kitaplariGetir()
    kategorileriGetir()
    //eslint-disable-next-line
  },[secilenKategori])

  return (
    <>
      <Navi secilenKategori={secilenKategori} kategoriler={kategoriler} setSecilenKategori={setSecilenKategori}/>
      <Form kitaplar={kitaplar} yeniKitap={yeniKitap} />
      <CardList kitaplar={kitaplar} kitapSil={kitapSil} />
      <h3 style={{ color: "red", backgroundColor: "greenyellow" }}>BilgeAdam Akademi</h3>
    </>
  );
}

export default App;