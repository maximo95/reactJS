import {useState} from "react"


const ItemCount = ({stock,initial,onAdd}) => {

    const [contador, setContador] = useState(initial)

    return ( 
        <>
            <p>Contador : {contador}</p>
            <button onClick={()=>{ setContador(contador+1) }} > aumentar contador </button>
            <button onClick={()=>{ setContador(contador-1) }} > disminuir contador </button>
            <button onClick={()=>{ console.log("Compra confirmada") }} > confirmar compra </button>
        </>
    );
}
 
export default ItemCount;