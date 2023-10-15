import React, { useContext } from 'react'
import "../style/navi.css"
import Logo from "../image/resim1.png"
import DataContext from '../context/DataContext'

const Navi = () => {
  const {
    state,
    dispatch,
  } = useContext(DataContext)
  const handleClickKategori=(kategoriAdi)=>{
dispatch({type:"secilenKategori",payload:kategoriAdi})
  }
  return (
    <nav>
      <div className="brand">
        <img src={Logo} alt="logo" />
        <b>BilgeAdam Library</b>

      </div>
      <div className="kategori">
        <ul>
          {
            state.kategoriler.map(kategori =>
              ((state.secilenKategori && state.secilenKategori !== "Tüm Kitaplar") || kategori.kategoriAdi !== "Tüm Kitaplar") &&
              <li key={kategori.kategoriID} onClick={() => handleClickKategori(kategori.kategoriAdi)}>{kategori.kategoriAdi}</li>
            )
          }
        </ul>
        <input onChange={(e) => dispatch({ type: "search", payload: e.target.value })} type="text" placeholder='Kitap Ara...' />
      </div>
    </nav>
  )
}

export default Navi