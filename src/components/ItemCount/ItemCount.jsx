import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial)

    const increment = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }


    const decrement = () => {
        if (contador > initial) {
            setContador(contador - 1)
        }
    }


    return (
        <>
        <div className='counter'>
            
            <div className='controls'>
                <button className='button' onClick={decrement}> - </button>
                <h4 className='number'> {contador} </h4>
                <button className='button' onClick={increment}> + </button>
            </div>
            <div>

                <button className='button' onClick={() => onAdd(contador)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
        </>
    )
}

export default ItemCount