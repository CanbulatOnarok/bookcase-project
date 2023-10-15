import React, { useContext } from 'react'
import "../style/card.css"
import { BsFillTrashFill, BsGear } from 'react-icons/bs'
import DataContext from '../context/DataContext'

const Card = ({ kitap }) => {

  const { kitapSil, cardDuzenle } = useContext(DataContext)

  const scrollToTop = () => {
    window.screenTop({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    !kitap.isDeleted && (
      <div key={kitap.id} className='card'>
        <button className='delete' onClick={() => kitapSil(kitap.id)}><BsFillTrashFill /></button>
        <img src={kitap.kitapResim} alt="kitapResmi" />
        <div className="card-body">
          <p>{kitap.kitapAdi}</p>
          <p>Kitap Kategorisi: {kitap.kitapKategori}</p>
          <p>Kitap yazarı : {kitap.kitapYazari}</p>
          <p>Sayfa Sayısı : {kitap.sayfaSayisi}</p>
          <p>Kitap Açıklaması : {kitap.kitapAciklama.substring(0, 176).substring(0, kitap.kitapAciklama.substring(0, 176).lastIndexOf(" ")) + "..."}</p>
          <button className='edit' onClick={() => { cardDuzenle(kitap.id); scrollToTop(); }}><BsGear /></button>
        </div>
      </div>
    )
  )
}

export default Card
