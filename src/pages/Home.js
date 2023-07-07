import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import OrderList from '../components/OrderList'
import Header from '../components/Header'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { getFetch } from '../components/FetchMethods'

const Home = () => {
  const [reload, setReload] = useState(true)
  const [noEjecuted, setNoEjecuted] = useState(true)
  const [data, setData] = useState()
  const [orderStates, setOrderStates] = useState()

  useEffect(() => {
    if (!reload) return
    getFetch('api/orders').then(response => {
      setData(response)
    })
    setReload(false)
  }, [reload])

  useEffect(() => {
    if (!noEjecuted) return
    getFetch('api/order_states').then(response => {
      setOrderStates(response)
    })
    setNoEjecuted(false)
  }, [noEjecuted])


  const handleReceived = response => {
    setData(response)
  }
  return (
    <Layout>
      <div className='Header d-flex align-items-center px-4 shadow'>
        <Header name='Pedidos' type='Home'/>
        <ActionCableConsumer
          channel={{ channel: 'OrdersChannel' }}
          onReceived={handleReceived}
        ></ActionCableConsumer>
      </div>
      <OrderList data={data} orderStates={orderStates} />
    </Layout>
  )
}

export default Home
