import React, { useState } from 'react'
import Order from './Order'
import UndoButton from './UndoButton'
import { putFetch } from './FetchMethods'
import { useNavigate } from 'react-router-dom'
import '../themes/OrderList.css'
import ToastComponent from './ToastComponent'
import Layout from './Layout'

const OrderList = ({ data, orderStates }) => {
  const [stateHistory, setStateHistory] = useState({})
  const navigate = useNavigate()

  const changeHistory = (orderId, oldState, newState) => {
    const deliveredStateNumber = orderStates.find(orderState => orderState.value === 'delivered').id
    if (newState === deliveredStateNumber) {
      setStateHistory({ orderId: orderId, oldState: oldState, newState: newState })
    }
  }

  const undoLastAction = () => {
    putFetch('api/orders', { order_state_id: stateHistory.oldState }, stateHistory.orderId)
    setStateHistory({})
  }

  if (!data) return <h1 className='d-flex align-items-center'>Cargando...</h1>
  if (data?.status === 'unauthorized') {
    navigate('/login')
  }

  const activeStates = ['delayed', 'on_time', 'over_time']
  const activeOrders = data?.filter(({ state }) => {
    return activeStates.some(activeState =>
      state.toLowerCase().includes(activeState)
    )
  })

  const minSize = 5, maxSize = 10
  const queue = activeOrders.sort((order, otherOrder) => {
    let orderDate = new Date(order.created_at)
    let otherOrderDate = new Date(otherOrder.created_at)
    return orderDate - otherOrderDate
  }).slice(0, maxSize)

  if (!queue || queue.length < minSize) 
  return (
    <Layout type='Information'>
      <h1>Hay menos de 5 órdenes.</h1>
    </Layout>
  )

  return (
    <div className='p-4 text-center bg-light justify-content-center align-items-center container-fluid '>
      <table className='table align-middle table-borderless table-striped table-hover table-sm css-counter rounded'>
        <thead className='table-secondary'>
          <tr>
            <th className='d-md-block p-2'>
              <strong>#</strong>
            </th>
            <th>Cliente</th>
            <th>Orden</th>
            <th>Fecha y Hora del Pedido</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {queue?.map(order => {
            return (
              <Order
                key={`order${order.id}`}
                order={order}
                orderStates={orderStates}
                changeHistory={changeHistory}
              />
            )
          })}
        </tbody>
      </table>
      <UndoButton stateHistory={stateHistory} undoLastAction={undoLastAction} />
      <div className='d-flex justify-content-center'>
        {activeOrders.length !== queue.length ? (
          <ToastComponent
            headerText='Advertencia'
            bodyText={`Existen más órdenes (${activeOrders.length}) de las que se muestran en pantalla (${queue.length})`}
          />
        ) : null}
      </div>
    </div>
  )
}

export default OrderList
