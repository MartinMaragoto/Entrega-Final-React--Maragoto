import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({item, cantidad, img, nombre}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className="productDiv">
        <h4 className="h3Subtitle"> {item.nombre} </h4>
        <p className="parrafo">Cantidad: {cantidad} </p>
        <p className="parrafo">Precio: {item.precio} </p>
        <button className="productButton2" onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        <hr className="linea"/>
    </div>
  )
}

export default CartItem