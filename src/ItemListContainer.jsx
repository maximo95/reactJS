import { useState,useEffect } from "react"

const ItemListContainer = (saludo) => {
    const [contador, setContador] = useState(0)

    useEffect (()=> {
        console.log("El componente se renderizó")
    })
    return (
        <>
        <p>{saludo}</p>
        <p>Contador: {contador}</p>
        <button onClick= {()=> {setContador(contador+1)}}>Aumentar Contador</button>
        <button onClick= {()=> {setContador(contador-1)}}>Aumentar Contador</button>
        <contador onAdd={()=>{}}/>
        </>
    )
}

export default ItemListContainer