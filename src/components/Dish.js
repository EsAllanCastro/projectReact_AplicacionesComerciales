import React from 'react'

const Dish = ({ dish: { id, name, amount } }) => {
  return <div>{name} - Cantidad de platillos: <b>{amount}</b></div>
}

export default Dish
