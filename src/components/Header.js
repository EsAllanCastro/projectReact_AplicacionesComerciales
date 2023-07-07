import React from 'react'
import Logout from './Logout'


const Header = ({ name, type }) => {
      if (type === 'Home') {
        return (
          <header className='Header px-4 shadow'>
            <div className='h-100 w-80 float-left d-flex align-items-center'>
              <h1>{name}</h1>
            </div>
            <div className='h-100 w-20 float-right d-flex align-items-center'>
              <Logout />
            </div>
          </header>  
        )
      } else {
        return (
          <div>
            <header className='Header d-flex align-items-center px-4 shadow'>
              <h1 className='d-flex p-2'>{name}</h1>
            </header>
          </div>
        )

      }
}


export default Header
