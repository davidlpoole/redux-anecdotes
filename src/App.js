import React from 'react'
import Anecdotes from './components/Anecdotes'
import CreateAnecdote from './components/CreateAnecdote'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {

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