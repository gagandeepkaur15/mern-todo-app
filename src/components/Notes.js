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
                    <div className='col-md-4'>
                    <div class='card my-4'>
                        <div class="card-body">
                            <div className="d-flex">
                                <h5 className="title mx-auto">{t.todo}</h5>
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
