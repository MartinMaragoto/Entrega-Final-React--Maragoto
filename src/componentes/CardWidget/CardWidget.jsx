import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CardWidget.css';






const CardWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "pixelcarrito.png"



  return (



    
      <div className='divCartLogo'>
       
       <Link to="/cart">
        {cantidadTotal > 0 && <strong className='numeroCarrito'> {cantidadTotal} </strong>}
        <img className='cartLogo' src={imgCarrito} alt="Imagen de un carro" />
       </Link>

      </div>


  )
}

export default CardWidget










