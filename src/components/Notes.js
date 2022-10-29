import React, { useState } from 'react'

export default function Notes() {

    const todoList = [
        {
            "todo": "Clean room"
        },
        {
            "todo": "Clean cupboard"
        }
    ]

    const [todos, setTodo] = useState(todoList);

    return (
        <div className='todoList'>
            {todos.map(t => {
                return (
                    <div className='row-md-'>
                    <div class='card my-4'>
                        <div class="card-body my-auto">
                            <div className="d-flex">
                                <p className="title mx-auto">{t.todo}</p>
                                <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}
