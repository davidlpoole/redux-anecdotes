const notificationAtStart = ''

export const displayNotification = (text, duration) => {
  return async dispatch => {
    await dispatch(showNotification(text))
    setTimeout(
      async () => await dispatch(hideNotification()), duration)
  }
}

export const showNotification = text => {
  return {
    type: 'SHOW_NOTIFICATION',
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
    case 'SHOW_NOTIFICATION':
      return action.text
    case 'HIDE_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default notificationReducer