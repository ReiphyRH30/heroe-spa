import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {
    const [todoId, setTodoId] = useState(1);

    // const { data: todos = [] , isLoading} = useGetTodosQuery()
    const { data: todo, isLoading} = useGetTodoByIdQuery(todoId);
    
    const handleNext = () => {

        setTodoId( (state) => state + 1)

    }

    const handlePrev = () => {
        if( todoId <= 1) return;

        setTodoId( (state) => state -1 )

    }

    return (
        <>
            <h1>Todo - RTK Query</h1>
            <hr />

            <h4>isLoading: { isLoading ? 'True' : 'False'}</h4>

            <pre>{ JSON.stringify(todo) }</pre>
            <p>{todoId}</p>

            <button
                onClick={ handlePrev }
            >
                Prev Todo
            </button>

            <button
                onClick={ handleNext }
            >
                Next Todo
            </button>
            
            
        </>
    )
}
