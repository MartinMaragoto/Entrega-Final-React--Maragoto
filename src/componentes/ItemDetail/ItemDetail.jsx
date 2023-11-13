import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';



const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarAlCarrito} = useContext(CarritoContext);



  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

 
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }



  
  return (
    <div className='cardProducto'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <img className='productImage' src={img} alt= {nombre} />
      <p> Esta es una descripción del producto </p>

      {

      }

      {
         agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }
    </div>
  )
}

export default ItemDetail