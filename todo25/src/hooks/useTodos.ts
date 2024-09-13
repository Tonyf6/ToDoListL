import { useQuery } from "@tanstack/react-query"
// npm i @tanstack/react-query   
import axios from "axios"

interface Todo {
    id: number
    title: string
    body: string
    completed: boolean
}


const useTodos = () => {
    const fetchTodos = () => 
    axios
    .get<Todo[]>("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.data)
    
    return useQuery<Todo[],Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos
      });
}

export default useTodos