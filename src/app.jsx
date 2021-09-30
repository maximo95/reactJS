import { useState,useEffect} from "react"
import ItemListContainer from "./ItemListContainer"
import Header from "./Header"
import Footer from "./Footer"
import ItemCount from "./ItemCount"
import {BrowserRouter} from "react-router-dom"
const {Item} = Nav
const App  = () => {
    return (
        <>
        <Header id="main-header" titulo="Mi E-Commerce" subtitulo = "Tienda de Café"/>
        <ItemListContainer saludo ="Bienvenidos a mi E-Commerce"/>
        <Footer/>
        </>
    )
}
export default App