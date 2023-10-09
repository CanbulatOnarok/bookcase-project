import CardList from "./components/CardList";
import Form from "./components/Form";
import Navi from "./components/Navi";
import "./style/app.css"
import { useEffect, useState } from "react";
import axios from "axios";



function App() {
  const[kitaplar,setKitaplar] = useState([]);
  const[kategoriler,setKategoriler] = useState([]);
  const[secilenKategori,setSecilenKategori] =useState("");
  const[secilenKitap,setSecilenKitap] = useState(null)

  const kitapEkleDuzenle = async (yeni)=>{
    let url = "http://localhost:3005/kitaplar";
    if(!secilenKitap){
      //kitap ekle bölümü
      const response = await axios.post(url,yeni);
      if(response.status === 201){
        setKitaplar(prev=>[...prev,yeni]);
      }
    }
    else{
      //kitap düzenle bölümü
      url += `/${secilenKitap.id}`
      const response2 = await axios.put(url,yeni);
      console.log(response2);
      setSecilenKitap(null)
    } 
  }
//CRUd işlemleri 
//cr:creat
//u :upgrade
//d :delete

  const kitapSil = async (id)=>{
    // setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id!==id));
    // setKitaplar(prev=>prev.filter(statedenGelen=>statedenGelen.id!==id));
    // let url = "http://localhost:3005/kitaplar/"+id;
    let url =`http://localhost:3005/kitaplar/${id}`;
    // const response = await axios.delete(url); //!!!!!! DİKKAT ET !!!!!!!
    const response = await axios.patch(url,{isDeleted:true});
    // console.log(response);
    // kitaplariGetir();//1.yol
    if(response.status===200){
      setKitaplar(prev=>prev.filter(statedenGelen=>statedenGelen.id!==id));
    }
  }
  const kitaplariGetir = async ()=> {
      let url = "http://localhost:3005/kitaplar";
      if(secilenKategori && secilenKategori!=="Tüm Kitaplar"){
        // url = url + "?kitapKategori="+secilenKategori
        url+="?kitapKategori="+secilenKategori;
      }
      const response = await fetch(url);
      const kitaplar = await response.json();
      setKitaplar(kitaplar);
  }
  const kategorileriGetir = async ()=> {
    let url = "http://localhost:3005/kategoriler"
    const response = await axios.get(url);
    const kategoriler = response.data;
    setKategoriler(kategoriler);
  }
  const cardDuzenle = async (id)=>{
    let url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.get(url);
    const duzenlenecekKitap = response.data;
    // console.log(duzenlenecekKitap);
    setSecilenKitap(duzenlenecekKitap);

  }

  useEffect(()=>{
    kitaplariGetir()
    kategorileriGetir()
    //eslint-disable-next-line
  },[secilenKategori,secilenKitap])

  return (
    <>  
      <Navi secilenKategori={secilenKategori} kategoriler={kategoriler} setSecilenKategori={setSecilenKategori} />
      <Form kitaplar ={kitaplar} kitapEkleDuzenle={kitapEkleDuzenle} secilenKitap={secilenKitap}/>
      <CardList kitaplar={kitaplar} kitapSil={kitapSil} cardDuzenle= {cardDuzenle}/>
      <h3 style={{color:"red",backgroundColor:"greenyellow"}}>BilgeAdam Akademi</h3>  
    </>
  );
}

export default App;