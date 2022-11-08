import React, { useState, useRef, useEffect } from 'react'
import "./todo.css"



const base_api = "http://localhost:8000/";
export default function Todolist() {
    const [Todo, set_Todo] = useState([]);
    const [newtodo, setnewtodo] = useState("");
    const [updatetodo, setupd] = useState("");



    useEffect(() => {
        gettodos();

    }, [Todo])

    const gettodos = () => {
        fetch(base_api + "finding")
            .then(res => res.json())
            .then(data => set_Todo(data))
            .catch(err => console.error("error: ", err));

        console.log(Todo);
    }

    const deletodo = async id => {
        const data = await fetch(base_api + "deletei/" + id, { method: "DELETE" })
            .then(res => res.json());
        console.log(data);
        set_Todo(Todo => Todo.filter(todo => todo._id !== data._id))
    }

    const addtodo = async () => {
        const data = await fetch(base_api + "neq", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: newtodo
            })
        }).then(res => res.json());

        set_Todo([...Todo, data]);
        setnewtodo("");


    }

    const upit = async id => {
        console.log(id);
        const data = await fetch(base_api + "update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: updatetodo
            })
        }).then(res => res.json());

        set_Todo(Todo => Todo.map(todos => {

            if (todos._id === data._id) {

                todos.text = data.text;

            }

            return todos;

        }));

        setupd("");
    }
    

    return (
        <div className="todo-container">
            <h2>To-Do List</h2>
            <div className="todo">
                <form className="todo-header">
                    <input type="text" name="content"
                        onChange={e => setnewtodo(e.target.value)}
                        value={newtodo} />
                    <button type="button" onClick={addtodo}><span className="subit-but">submit</span></button>
                </form>
                <div className="list">
                    {
                        Todo.map(todos => {
                            return (
                                <div className='list-item' key={todos._id}>
                                    {todos.text}
                                    <span className='update-button' >
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </span>
                                    <span className='cross-button' onClick={() => { deletodo(todos._id) }}>
                                        <i class="fa-solid fa-delete-left"></i>
                                    </span>
                                    <div className='update-pop' key={todos._id}>
                                        <form>
                                            <input type="text" name="content" value={updatetodo} onChange={e =>

                                                setupd(e.target.value)

                                            } placeholder={todos.text} />
                                            <span className='cross-button' >
                                                <i class="fa-solid fa-check" onClick={() => { upit(todos._id) }}></i>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
