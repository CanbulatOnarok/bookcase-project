import React from 'react'
import "../style/navi.css"
import Logo from "../image/resim1.png"

const Navi = () => {
  return (
    <nav>
        <div className="brand">
            <img src={Logo} alt="logo" />
            <b>BilgeAdam Library</b>
        </div>
        <div className="kategori">
            <ul>
                <li>Yazılım</li>
                <li>Edebiyat</li>
                <li>Tarih</li>
                <li>Diğer</li>
            </ul>
            
        </div>     
    </nav>
  )
}

export default Navi