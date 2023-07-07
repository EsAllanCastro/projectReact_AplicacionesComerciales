import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const ToastComponent = ({
  headerText,
  bodyText,
  showToast,
  setShowToast,
  type
}) => {
  if (type === 'Notification') {
    return (
      <Toast
        show={showToast}
        onClose={() => setShowToast(!showToast)}
        autohide={true}
        delay={4000}
        style={{
          position: 'center',
        }}
      >
        <Toast.Header>
          <strong className='mr-auto'>{headerText}</strong>
        </Toast.Header>
        <Toast.Body>{bodyText}</Toast.Body>
      </Toast>
    )
  }
  return (
    <ToastContainer>
      <Toast show='true'>
        <Toast.Header closeButton={false}>
          <strong className='me-auto'>{headerText}</strong>
        </Toast.Header>
        <Toast.Body>{bodyText}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default ToastComponent
