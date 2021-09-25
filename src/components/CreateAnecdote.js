import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const CreateAnecdote = (props) => {
  const dispatch = useDispatch()

  const createNew = async (event) => {
    event.preventDefault()
    const anecdoteText = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(anecdoteText))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createNew}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default CreateAnecdote