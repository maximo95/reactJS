import { useState,useEffect} from "react"
import ItemListContainer from "./ItemListContainer"
import Header from "./Header"
import Footer from "./Footer"
import ItemCount from "./ItemCount"
const App  = () => {
    return (
        <>
        <header id="main-header" titulo="Mi E-Commerce" subtitulo = "Tienda de Café" edad = {26}/>
        <ItemListContainer saludo ="Bienvenidos a mi E-Commerce"/>
        <Footer/>
        </>
    )
}
export default App