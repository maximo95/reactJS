import { useState,useEffect} from "react"
import ItemListContainer from "ItemListContainer"
import Header from "./Header"
const App  = () => {
    return (
        <>
        <header id="main-header" titulo="Mi E-Commerce" subtitulo = "Tienda de Café" edad = {26} persona = {{persona}}/>
        <ItemListContainer saludo ="Bienvenidos a mi E-Commerce"/>
        <footer>
            <p>copyright &copy; 2020</p>
        </footer>
        </>
    )
}