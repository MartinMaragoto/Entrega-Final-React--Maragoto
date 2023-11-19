import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../services/config';
import { collection, getDocs, query, where } from 'firebase/firestore';



const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams ()

  useEffect (()=> {

    const misProductos = idCategoria ? query(collection(db, "inventario"), where ("idCat", "==", idCategoria)): collection (db, "inventario"); 

    getDocs (misProductos)
    .then (res => {
        const nuevosProductos = res.docs.map(doc => {

          const data= doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos)
        })
        .catch (error => console.log (error))
  }, [idCategoria])
  

  // useEffect(() => {

  //   const functionProductos = idCategoria ? getProductType : getProductos

  //   functionProductos (idCategoria)
  //   .then (res => setProductos(res))

  // }, [idCategoria])

  return (
    <>
      <h2 className='productTitle'>Productos</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer