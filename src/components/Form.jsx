import React, { useEffect, useState } from 'react'
import "../style/form.scss"

const Form = ({kitapEkleDuzenle,kitaplar,secilenKitap}) => {

  const [kitapAdi,setKitapAdi] = useState("");
  const [kitapKategori,setKitapKategori] = useState("Kategori Seçiniz");
  const [kitapYazari,setKitapYazari] = useState("");
  const [sayfaSayisi,setSayfaSayisi] = useState("");
  const [kitapResim,setKitapResim] = useState("");
  const [kitapAciklama, setKitapAciklama] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    kitapEkleDuzenle({
      id:kitaplar.length+1,
      kitapAdi:kitapAdi,
      kitapKategori:kitapKategori,
      kitapYazari:kitapYazari,
      sayfaSayisi:sayfaSayisi,
      kitapResim:kitapResim,
      kitapAciklama:kitapAciklama
    })
    setKitapAdi("");
    setKitapKategori("Kategori Seçiniz");
    setKitapYazari("");
    setSayfaSayisi("");
    setKitapResim("");
    setKitapAciklama("");
  }
  useEffect(()=>{
   if(secilenKitap){
     setKitapKategori(secilenKitap.kitapKategori)
     setKitapAdi(secilenKitap.kitapAdi)
     setKitapYazari(secilenKitap.kitapYazari)
     setKitapResim(secilenKitap.kitapResim)
     setSayfaSayisi(secilenKitap.sayfaSayisi)
     setKitapAciklama(secilenKitap.kitapAciklama)
   }
  },[secilenKitap])

  return (
    <form onSubmit={handleSubmit}>
        <h3>{secilenKitap?"Kitabı Düzenle":"Kitap Ekle"}</h3>
        <select value={kitapKategori} onChange={e=>setKitapKategori(e.target.value)}>
          <option>Kategori Seçiniz</option>
          <option>Yazılım</option>
          <option>Edebiyat</option>
          <option>Tarih</option>
          <option>Diğer</option>
        </select>
        <input value={kitapAdi} onChange={e=>setKitapAdi(e.target.value)} type="text" placeholder='Kitap Adı'/>
        <input value={kitapYazari} onChange={e=>setKitapYazari(e.target.value)} type="text" placeholder='Kitap Yazarı'/>
        <input value={sayfaSayisi} onChange={e=>setSayfaSayisi(e.target.value)} type="number" placeholder='Kitap Sayfa Sayısı'/>
        <input value={kitapResim} onChange={e=>setKitapResim(e.target.value)} type="text" placeholder='Kitap Resimi(URL)'/>
        <textarea value={kitapAciklama} onChange={e=>setKitapAciklama(e.target.value)} placeholder='Kitap Açıklaması'></textarea>
        <input disabled={
          kitapKategori==="Kategori Seçiniz" ||
          !kitapAdi.trim()||
          !kitapYazari.trim() ||
          !kitapResim.trim() ||
          !kitapAciklama.trim() ||
          !sayfaSayisi
          } type="submit" value={secilenKitap?"Düzenle":"Ekle"}/>

    </form>
  )
}

export default Form