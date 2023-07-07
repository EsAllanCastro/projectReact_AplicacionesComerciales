import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postFetch } from '../components/FetchMethods'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ToastComponent from '../components/ToastComponent'

function LogIn() {
  const [showToast, setShowToast] = useState(false)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleOnClick = e => {
    if (validateInput(username) && validateInput(password)) {
      e.preventDefault()
      try {
        postFetch('api/user/sign_in', {
          username: username,
          password: password
        }).then(result => {
          if (result.status !== 'accepted') {
            setShowToast(true)
          } else {
            navigate('/home')
          }
          setUserName('')
          setPassword('')
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  const validateInput = inputText => {
    if (!inputText.trim()) return false
    return true
  }

  return (
    <Layout >
      <Header name='¡Molcajete en tu cocina! Bienvenido al Login' type='Login'/>
      <div className='d-flex align-items-center flex-column min-vh-50 mt-5'>
        <form className='col-4 p-4'>
        <div className='form-group row'>
            <input
              type='text'
              className='form-control input-sm'
              value={username}
              placeholder='Nombre de usuario'
              onChange={event => setUserName(event.target.value)}
              required='required'
            />
          </div>
          <div className='form-group row'>
            <input
              className='form-control input-sm'
              value={password}
              type='password'
              placeholder='Contraseña'
              onChange={event => setPassword(event.target.value)}
              required='required'
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button
              className='btn btn-primary m-2 align-self-center'
              style={{ backgroundColor: 'green' , borderColor: 'green'}}
              type='submit'
              onClick={handleOnClick}

            >
              Ingresar
            </button>
          </div>
          <div className='d-flex justify-content-center'>
            <ToastComponent
              headerText='Error'
              bodyText='El inicio de sesión ha fallado, por favor verificar los datos brindados'
              showToast={showToast}
              setShowToast={setShowToast}
              type='Notification'

            />
          </div>
        </form>
        <div></div>
      </div>
    </Layout>
  )
}

export default LogIn
