import './Item.css'; 
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='cardProducto'>

        <img className='productImage' src= {img} alt= {nombre} />
        <h3> {nombre} </h3>
        <p>U$D {precio} </p>
        <p>Stock: {stock} </p>
        <Link className='productButton' to = {`/item/${id}`}> Ver Detalles</Link>
        {/* <button className='productButton'> Ver Detalles </button> */}
    </div>
  )
}

export default Item