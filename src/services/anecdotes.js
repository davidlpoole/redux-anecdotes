import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const newAnecdote = async (anecdoteText) => {
  const newAnecdoteObj = {
    content: anecdoteText,
    votes: 0
  }
  const response = await axios.post(baseUrl, newAnecdoteObj)
  return response.data
}

const vote = async (id) => {
  const anecdoteToUpdate = await axios.get(`${baseUrl}/${id}`)

  const newAnecdoteObj = {
    content: anecdoteToUpdate.data.content,
    votes: anecdoteToUpdate.data.votes + 1
  }
  const updatedAnecdote = await axios.put(`${baseUrl}/${id}`, newAnecdoteObj)
  return updatedAnecdote.data
}

const anecdoteService = { getAll, newAnecdote, vote }
export default anecdoteService