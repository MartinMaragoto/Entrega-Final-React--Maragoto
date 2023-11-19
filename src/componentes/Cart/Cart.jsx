import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="subtitle">No hay productos en el carrito. Vamos de compras! </h2>
                <Link className="agregarCarrito" to="/">Ver Productos</Link>
            </>
        )
    }

    return (
        <div className="productDiv2">
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <h3 className="total">Total: ${total} </h3>
            <h3 className="total">Cantidad Total: {cantidadTotal} </h3>
            <div className="contenedorBotones">
                <button className="productButton3" onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
                <Link className="productButton3" to="/checkout">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart