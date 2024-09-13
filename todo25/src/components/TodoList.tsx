import axios from 'axios'
import { useState, useEffect } from 'react'

interface Todo {
    id: number
    title: string
    body: string
    completed: boolean
}
const TodoList = () => {

    const [todos, setTodos] = useState<Todo[]>([])
    const [error, setError] = useState<string | null>(null)

const fetchData = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => setTodos(res.data))
    .catch(error => setError(error))
}

useEffect(() => {
  fetchData()
})
  return (
    <>
    {todos.map((todo) => (
        <li>{todo.title} {todo.body}</li>
    ))}
    </>
  )
}

export default TodoList