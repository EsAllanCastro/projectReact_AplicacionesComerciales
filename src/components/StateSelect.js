import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { putFetch } from './FetchMethods'

const StateSelect = ({ orderId, state, orderStates, changeHistory }) => {
  const [selectedState, setSelectedState] = useState(
    orderStates.find(orderState => orderState.value === state)
  )
  const [oldState, setOldState] = useState(
    orderStates.find(orderState => orderState.value === state)
  )

  useEffect(() => {
    setSelectedState(orderStates.find(orderState => orderState.value === state))
  }, [state, orderStates])

  const [mustUpdate, setMustUpdate] = useState(false)
  const options = [
    orderStates.find(orderState => orderState.value === state),
    orderStates.find(orderState => orderState.value === 'delivered'),
  ]

  useEffect(() => {
    if (!mustUpdate) return
    putFetch('api/orders', { order_state_id: selectedState.id }, orderId)
    setMustUpdate(false)
    changeHistory(orderId, oldState.id, selectedState.id)
  }, [mustUpdate, selectedState, orderId])

  return (
    <Select
      className=''
      options={options}
      value={selectedState}
      isOptionDisabled={option => option.isdisabled}
      onChange={option => {
        setOldState(selectedState)
        setSelectedState(option)
        setMustUpdate(true)
      }}
    />
  )
}

export default StateSelect
