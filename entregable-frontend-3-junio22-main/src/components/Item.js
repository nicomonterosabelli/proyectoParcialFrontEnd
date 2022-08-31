import { useState } from 'react'
import React from 'react'
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item(item) {
  const [count, setCount] = useState(item.stock)

  function decrement () {
    if (count <= 0) {
      return
    } else { 
      setCount(count - 1)
      item.increment()
    }
  }
  const span = () => {
    if (count > 0){
      return count
    }
    else{
      return "Agotado"
    }
  }
  const boton = () => {
    if (count > 0){
      return "Comprar"
    }
    else{
      return "Sin stock"
    }
  }
  const habilitado = () => {
    if (count > 0){
      return false
    }
    else{
      return true
    }
  }
  

  return (
    <div className='producto'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h5>En stock: <span>{span()}</span></h5>
            <button onClick={decrement} disabled={habilitado()}>{boton()}</button>
    </div>
  )
}
