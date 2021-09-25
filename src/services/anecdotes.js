import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNote = async (anecdoteText) => {
  const newAnecdoteObj = {
    content: anecdoteText,
    votes: 0
  }
  const response = await axios.post(baseUrl, newAnecdoteObj)
  return response.data
}

const anecdoteService = { getAll, createNote }
export default anecdoteService