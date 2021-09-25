import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
  notification: notificationReducer,
  anecdotes: anecdoteReducer,
  filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools())


anecdoteService.getAll().then(notes =>
  notes.forEach(note => {
    store.dispatch({
      type: 'NEW_ANECDOTE', data: note
    })
  }))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)