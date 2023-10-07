import React from 'react'
import "../style/card.css"
import {BsTrash3,BsGear} from 'react-icons/bs';



const Card = ({ kitaplar, kitapSil }) => {

  return (
    kitaplar.map(kitap =>
      !kitap.isDeleted && //silinenleri getirme
      <div key={kitap.id} className='card'>
        {/* buraya tekrar gelinecek.*/}
        <button className='delete' onClick={() => kitapSil(kitap.id)}><BsTrash3/></button>
        <img src={kitap.kitapResim} alt="kitapResmi" />
        <div className="card-body">
        
          <p>{kitap.kitapAdi}</p>
          <p>Kitap Kategorisi: {kitap.kitapKategori}</p>
          <p>Kitap yazarı : {kitap.kitapYazari}</p>
          <p>Sayfa Sayısı : {kitap.sayfaSayisi}</p>
          <p>Kitap Açıklaması : {kitap.kitapAciklama.substring(0, 176).substring(0, kitap.kitapAciklama.substring(0, 176).lastIndexOf(" ")) + "..."}</p>
          <button className='edit' onClick={() => kitapSil(kitap.id)}><BsGear/></button>
        </div>
      </div>
      
    )
  )
}

//Erdem Sabri Beşik - 0507 489 60 31

export default Card