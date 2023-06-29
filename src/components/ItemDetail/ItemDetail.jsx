import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
   
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p> Hamburguesa Doble carne con Queso cheddar, con los siguientes ingredientes: cheddar, cebolla caramelizada, lechuga y tomate ! </p>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link to={"/cart"} > Terminar Compra</Link>) : (<ItemCount initial={1} stock={stock} onAdd={manejadorCantidad} />)


      }



    </div>
  )
}

export default ItemDetail