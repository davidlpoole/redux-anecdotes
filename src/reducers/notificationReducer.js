const notificationAtStart = ''

export const displayNotification = text => {
  return {
    type: 'DISPLAY_NOTIFICATION',
    text,
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  }
}

const notificationReducer = (state = notificationAtStart, action) => {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION':
      return action.text
    case 'HIDE_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default notificationReducer