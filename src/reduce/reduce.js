export const initialState = {
    kitaplar: [],
    kategoriler: [],
    secilenKategori: "",
    secilenKitap: null,
    kitapAdi: "",
    kitapYazari: "",
    kitapResim: "",
    kitapKategori: "Kategori Seçiniz",
    kitapAciklama: ``,
    sayfaSayisi: "",
    search: ""
}
export const reducer = (state, action) => {
    switch (action.type) {
        //case1
        case "kitapGetir":
            return {
                ...state,
                kitaplar: action.payload
            }
        //case2
        case "kitapAdi":
            return {
                ...state,
                kitapAdi: action.payload
            }
        //case3
        case "kitapYazari":
            return {
                ...state,
                kitapYazari: action.payload
            }
        //case4
        case "kitapKategori":
            return {
                ...state,
                kitapKategori: action.payload
            }
        //case5
        case "kitapAciklama":
            return {
                ...state,
                kitapAciklama: action.payload
            }
        //case6
        case "kitapResim":
            return {
                ...state,
                kitapResim: action.payload
            }
        //case7
        case "sayfaSayisi":
            return {
                ...state,
                sayfaSayisi: action.payload
            }
        //case8
        case "kategoriGetir":
            return {
                ...state,
                kategoriler: action.payload
            }
        //case9
        case "resetForm":
            return {
                ...state,
                kitapAdi: "",
                kitapYazari: "",
                kitapResim: "",
                kitapKategori: "Kategori Seçiniz",
                kitapAciklama: ``,
                sayfaSayisi: ""
            }
        //case10
        case "search":
            return {
                ...state,
                search: action.payload
            }
        //case11
        case "kitapSil":
            const kitapGüncelle = state.kitaplar.filter(kitap => kitap.id !== action.id)
            return {
                ...state,
                kitaplar: kitapGüncelle
            }
        //case12
        case "secilenKategori":
            return {
                ...state,
                secilenKategori: action.payload
            }
        //case13
        case "kitapEkle":
            const kitapEkle = [...state.kitaplar, action.yeni]
            return {
                ...state,
                kitaplar: kitapEkle
            }
        //case14
        case "kitapDüzenle":
            return {
                ...state,
                secilenKitap: null
            }
        //case15
        case "secilenKitap":
            return {
                ...state,
                kitapAdi: action.payload.kitapAdi,
                kitapYazari: action.payload.kitapYazari,
                kitapAciklama: action.payload.kitapAciklama,
                kitapResim: action.payload.kitapResim,
                kitapKategori: action.payload.kitapKategori,
                sayfaSayisi: action.payload.sayfaSayisi,
                secilenKitap:action.payload
            }
        default: {
            return state
        }
    }
}