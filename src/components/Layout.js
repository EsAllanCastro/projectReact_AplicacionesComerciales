import React from 'react'

const Layout = ({ children, type }) => {
  if (type === 'Information')
    return (
      <div className='p-4 text-center bg-light justify-content-center align-items-center container-fluid'>
        {children}
      </div>
    )
  return <div>{children}</div>
}

export default Layout
