import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import Anecdotes from './components/Anecdotes'
import CreateAnecdote from './components/CreateAnecdote'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification />
      <Filter />
      <Anecdotes />
      <CreateAnecdote />
    </div>
  )
}

export default App