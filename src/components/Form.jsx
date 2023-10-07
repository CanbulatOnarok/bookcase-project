import React, { useState } from 'react'
import "../style/form.scss"

const Form = ({yeniKitap,kitaplar}) => {

  const [kitapAdi,setKitapAdi] = useState("");
  const [kitapKategori,setKitapKategori] = useState("Kategori Seçiniz");
  const [kitapYazari,setKitapYazari] = useState("");
  const [sayfaSayisi,setSayfaSayisi] = useState("");
  const [kitapResim,setkitapResim] = useState("");
  const [kitapAciklama, setkitapAciklama] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();
   
    yeniKitap({
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
    setkitapResim("");
    setkitapAciklama("");
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
        <input value={kitapResim} onChange={e=>setkitapResim(e.target.value)} type="text" placeholder='Kitap Resimi(URL)'/>
        <textarea value={kitapAciklama} onChange={e=>setkitapAciklama(e.target.value)} placeholder='Kitap Açıklaması'></textarea>
        <input disabled={
          kitapKategori==="Kategori Seçiniz" ||
          !kitapAdi.trim ||
          !kitapYazari.trim() ||
          !kitapResim.trim() ||
          !kitapAciklama.trim() ||
          !sayfaSayisi
          } type="submit" value="Ekle"/>
    </form>
  )
}

export default Form