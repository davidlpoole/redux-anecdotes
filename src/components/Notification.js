import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notificationText = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notificationText ? '' : 'none'
  }
  return (
    <div style={style}>
      {notificationText}
    </div>
  )
}

export default Notification