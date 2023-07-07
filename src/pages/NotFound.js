import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import '../themes/NotFound.css'

const NotFound = () => {
  return (
    <Layout>
      <Header name='Cocina' />
      <Layout type='Information'>
        <h1>
          <span className='alert-text'>Error 404</span>
          <br /> La página no ha sido encontrada
        </h1>
      </Layout>
    </Layout>
  )
}

export default NotFound
