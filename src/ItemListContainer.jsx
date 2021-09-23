import { useState,useEffect } from "react"
import ItemCount from "./ItemCount"


const productosIniciales = [
    {id:1,titulo:"Producto 1"},
    {id:2,titulo:"Producto 2"}
]

const ItemListContainer = () => {
    const [productos,setProductos] = useState([])

    useEffect(()=>{
        const simulacion_de_pedido = new Promise((resolver)=>{
            setTimeout(()=>{
                resolver(productosIniciales)
            },2000)
        })

        simulacion_de_pedido
            .then(resultado=>{
                console.log(productos)
            })
    },[])
}

export default ItemListContainer