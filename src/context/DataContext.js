import { createContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { initialState, reducer } from "../reduce/reduce"


//context oluşturma
const DataContext = createContext()
// context'e bir sağlayıcı oluşturulur
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //CASE-13-14
  const kitapEkleDuzenle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!state.secilenKitap) {
      //kitap ekle bölümü
      const response = await axios.post(url, yeni);
      if (response.status === 201) {
        dispatch({ type: "kitapEkle", yeni: yeni })
        toast.success('Yeni Kitap Eklendi!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
    else {
      //kitap düzenle bölümü
      url += `/${state.secilenKitap.id}`
      const response2 = await axios.put(url, yeni);
      console.log(response2);
      dispatch({ type: "kitapDüzenle" })
      toast.warn('Kitap Düzenlendi!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  //CRUd işlemleri 
  //cr:creat
  //u :upgrade
  //d :delete
  //CASE-11
  const kitapSil = async (id) => {
    let url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.patch(url, { isDeleted: true });
    if (response.status === 200) {
      dispatch({ type: "kitapSil", id: id })
      toast.error('Kitap Silindi!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  //CASE-1
  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    if (state.secilenKategori && state.secilenKategori !== "Tüm Kitaplar") {
      // url = url + "?kitapKategori="+secilenKategori
      url += "?kitapKategori=" + state.secilenKategori;
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    dispatch({ type: "kitapGetir", payload: kitaplar })
  }
  //CASE-8
  const kategorileriGetir = async () => {
    let url = "http://localhost:3005/kategoriler"
    const response = await axios.get(url);
    const kategoriler = response.data;
    dispatch({ type: "kategoriGetir", payload: kategoriler })
  }
  //CASE-15
  const cardDuzenle = async (id) => {
    let url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.get(url);
    const duzenlenecekKitap = response.data
    dispatch({ type: "secilenKitap", payload: duzenlenecekKitap })

  }

  useEffect(() => {
    kitaplariGetir()
    kategorileriGetir()
    //eslint-disable-next-line
  }, [state.secilenKategori, state.secilenKitap])


  //CASE-9
  const handleSubmit = (e) => {
    e.preventDefault();
    kitapEkleDuzenle({
      id: state.kitaplar.length + 1,
      kitapAdi: state.kitapAdi,
      kitapKategori: state.kitapKategori,
      kitapYazari: state.kitapYazari,
      sayfaSayisi: state.sayfaSayisi,
      kitapResim: state.kitapResim,
      kitapAciklama: state.kitapAciklama
    })
    dispatch({ type: "resetForm" })
  }



  return <DataContext.Provider value={
    {
      state,
      dispatch,
      kitapSil,
      cardDuzenle,
      kitapEkleDuzenle,
      handleSubmit
    }
  }>
    {children}
  </DataContext.Provider>

}



export default DataContext;