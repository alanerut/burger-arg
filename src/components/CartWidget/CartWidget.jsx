import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
const Logo = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://st2.depositphotos.com/1114422/5830/v/600/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg";

  return (
    <div>
      <Link to={'/cart'} >
        <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
        {
          cantidadTotal > 0 && <span> {cantidadTotal} </span>
        }
      </Link>
    </div>
  )
}

export default Logo

