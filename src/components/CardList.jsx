
import Card from './Card'
import "../style/cardList.scss"
import { useContext } from 'react'
import DataContext from '../context/DataContext'


const CardList = () => {

  const { state } = useContext(DataContext)
  

  return (
    <div className='cardList'>
      {state.kitaplar.map(kitap =>
      kitap.kitapAdi.toLowerCase().startsWith(state.search.trim().toLowerCase())&& 
      // Kitap isminin başından itibaren  arama yapar
      // kitap.kitapAdi.toLowerCase().includes(search)&&
       // Kitap isminin içinde var mı diye arar
        <Card kitap={kitap} key={kitap.id}/>
      )}

    </div>
  )
}

export default CardList