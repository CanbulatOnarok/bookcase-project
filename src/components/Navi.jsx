import React from 'react'
import "../style/navi.css"
import Logo from "../image/resim1.png"

const Navi = ({ kategoriler, setSecilenKategori, secilenKategori }) => {
  return (
    <nav>
      <div className="brand">
        <img src={Logo} alt="logo" />
        <b>BilgeAdam Library</b>
      </div>
      <div className="kategori">
        <ul>
          {
            kategoriler.map(kategori =>
              <li key={kategori.kategoriID} onClick={() => setSecilenKategori(kategori.kategoriAdi)}>{kategori.kategoriAdi}</li>
            )
          }
        </ul>

      </div>
    </nav>
  )
}

export default Navi