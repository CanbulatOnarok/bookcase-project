import React from 'react'
import "../style/card.css"



const Card = ({kitaplar,kitapSil}) => {

  return (
    kitaplar.map(kitap=>
      <div key={kitap.id} className='card'>
        {/* buraya tekrar gelinecek.*/}
        <button onClick={()=>kitapSil(kitap.id)}>X</button>
        <img src={kitap.kitapResim} alt="kitapResmi"/>
        <div className="card-body">
          <p>{kitap.kitapAdi}</p>
          <p>Kitap Kategorisi: {kitap.kitapKategori}</p>
          <p>Kitap yazarı : {kitap.kitapYazari}</p>
          <p>Sayfa Sayısı : {kitap.sayfaSayisi}</p>
          <p>Kitap Açıklaması : {kitap.kitapAciklama.substring(0,176).substring(0,kitap.kitapAciklama.substring(0,176).lastIndexOf(" "))+"..."}</p>
        </div>
      </div>
      )  
  )
}

//Erdem Sabri Beşik - 0507 489 60 31

export default Card