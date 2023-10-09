import React from 'react'
import Card from './Card'
import "../style/cardList.scss"

const CardList = ({kitaplar,kitapSil,cardDuzenle}) => {
  return (
    <div className='cardList'>
        <Card kitaplar={kitaplar} kitapSil={kitapSil} cardDuzenle={cardDuzenle} />
    </div>
  )
}

export default CardList