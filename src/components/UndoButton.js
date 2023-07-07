import React from 'react'

const UndoButton = ({ stateHistory, undoLastAction }) => {
  const onClick = () => undoLastAction()
  const disableButton = Object.keys(stateHistory).length === 0 ? true : false

  return (
      <button
        disabled={disableButton}
        type='button'
        className='btn btn-sucess text-center m-3'
        style={{ backgroundColor: 'green', color: 'white' }}
        onClick={onClick}
      >Deshacer último pedido entregado</button>
  )
}

export default UndoButton
