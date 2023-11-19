import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './ItemDetail.css'; 


const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarAlCarrito} = useContext(CarritoContext);



  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

 
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }



  
  return (
    <div className='cardProducto cardProducto2'>
      <h2>{nombre} </h2>
      <h3>U$D {precio} </h3>
      <h3>Stock: {stock} </h3>

      <img className='productImage' src={img} alt= {nombre} />
      <p> Este producto es majestuoso </p>

      {

      }

{agregarCantidad > 0 ? (
    <>
        <Link to="/cart" className='terminarCompra'>Comprar ahora</Link>
        <Link to="/" className='buscarMasProductos'>Buscar mas productos</Link>
    </>
) : (
    <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
)}
    </div>
  )
}

export default ItemDetail