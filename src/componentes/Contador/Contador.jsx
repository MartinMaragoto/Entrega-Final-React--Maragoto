import { useState} from "react";


const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
    
    return (
        <>
            <div>
                <button className="yellowButton" onClick={restarContador}> - </button>
                <strong className="contador"> {contador} </strong>
                <button className="yellowButton" onClick={sumarContador}> + </button>
            </div>
            <button className="agregarCarrito" onClick={()=> funcionAgregar(contador)}> Agregar al Carrito </button>
        </>

    )
}

export default Contador