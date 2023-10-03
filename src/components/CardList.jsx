import React from 'react'
import Card from './Card'
import "../style/cardList.scss"

const CardList = ({kitaplar,kitapSil}) => {
  return (
    <div className='cardList'>
        <Card kitaplar={kitaplar} kitapSil={kitapSil}/>
    </div>
  )
}

export default CardList