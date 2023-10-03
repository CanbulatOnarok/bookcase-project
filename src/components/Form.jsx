import React, { useState } from 'react'
import "../style/form.scss"

const Form = ({yeniKitap,kitaplar}) => {

  const [kitapAdi,setKitapAdi] = useState("");
  const [kitapKategori,setKitapKategori] = useState("Kategori Seçiniz");
  const [kitapYazari,setKitapYazari] = useState("");
  const [sayfaSayisi,setSayfaSayisi] = useState("");
  const [kitapResmi,setKitapResmi] = useState("");
  const [kitapAciklamasi, setKitapAciklamasi] = useState("");

  // id:
  // kitapAdi:
  // kitapKategori:
  // kitapYazari:
  // sayfaSayisi:
  // kitapResim:
  // kitapAciklama:

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log("Form onaylandı!!");
    yeniKitap({
      id:kitaplar.length+1,
      kitapAdi:kitapAdi,
      kitapKategori:kitapKategori,
      kitapYazari:kitapYazari,
      sayfaSayisi:sayfaSayisi,
      kitapResim:kitapResmi,
      kitapAciklama:kitapAciklamasi
    })
  }


  return (
    <form onSubmit={handleSubmit}>
        <h3>Kitap Ekle</h3>
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
        <input value={kitapResmi} onChange={e=>setKitapResmi(e.target.value)} type="text" placeholder='Kitap Resimi(URL)'/>
        <textarea value={kitapAciklamasi} onChange={e=>setKitapAciklamasi(e.target.value)} placeholder='Kitap Açıklaması'></textarea>
        <input disabled={
          kitapKategori==="Kategori Seçiniz" ||
          !kitapAdi.trim ||
          !kitapYazari.trim() ||
          !kitapResmi.trim() ||
          !kitapAciklamasi.trim() ||
          !sayfaSayisi
          } type="submit" value="Ekle"/>
    </form>
  )
}

export default Form