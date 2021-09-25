import anecdoteService from "../services/anecdotes"

export const addVote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (anecdoteText) => {
  return async dispatch => {
    const data = await anecdoteService.newAnecdote(anecdoteText)
    dispatch({
      type: 'NEW_ANECDOTE',
      data
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': {
      const id = action.data.id
      const anecdoteToUpdate = state.find(n => n.id === id)
      const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      )
    }
    case 'NEW_ANECDOTE': {
      return [...state, action.data]
    }
    case 'INIT_ANECDOTES': {
      return action.data
    }
    default:
      return state
  }
}

export default anecdoteReducer