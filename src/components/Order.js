import React from 'react'
import Dish from './Dish'
import StateSelect from './StateSelect'

const Order = ({
  order: {
    id,
    client: { name },
    dishes,
    state,
    created,
  },
  orderStates,
  changeHistory
}) => {
  const getColorBasedOnState = (state) => {
    return {
      on_time: 'bg-success bg-gradient',
      over_time: 'bg-warning bg-gradient',
      delayed: 'bg-danger bg-gradient',
    }[state]
  }

  const rowColor = getColorBasedOnState(state)

  return (
    <tr>
      <td className={`${rowColor} shadow-sm align-middle`}>{}</td>
      <td className='align-middle'>{`${name}`}</td>
      <td className='align-middle'>
        {dishes.map((dish) => {
          const { id, name, amount } = dish
          return <Dish key={`${id}${name}${amount}`} dish={dish} />
        })}
      </td>
      <td className='align-middle'>{created}</td>
      <td className='align-middle'>
        <StateSelect orderId={id} state={state} orderStates={orderStates} changeHistory={changeHistory}/>
      </td>
    </tr>
  )
}

export default Order
