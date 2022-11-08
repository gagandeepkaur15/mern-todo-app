import React, { useEffect, useState } from 'react';

const base_api = "http://localhost:3000/";
function Home() {

  var [inputTodo, setInputTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    gettodos();

  }, [todoList])

  const gettodos = () => {
    fetch(base_api + "fetchTodo")
      .then(res => res.json())
      .then(data => setTodoList(data))
      .catch(err => console.error("error: ", err));

    console.log(todoList);
  }

  // const handleAddItem = async (e) => {
  //   e.preventDefault();
  //   if (!inputTodo) {

  //   }
  //   else {
  //     const data = await fetch(base_api + "addTodo", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         todo: inputTodo
  //       })
  //     }).then(res => res.json());

  //     // setTodoList(inputTodo) -> does not add in array but saves the string
  //     setTodoList([...todoList, data]);
  //     // ... are used to save the previous state ie data already in the array
  //     setInputTodo = ('');

  //   }
  // }

  const handleAddItem = async () => {
    const data = await fetch(base_api + "neq", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            todo: inputTodo
        })
    }).then(res => res.json());

    setTodoList([...todoList, data]);
    setInputTodo("");
}

  const handleDelete = (i) => {
    const newTodoList = todoList.filter((el, index) => {
      return index !== i;
    });
    setTodoList(newTodoList);
  }

  useEffect(() => {

  }, [])

  return (
    <>
    <div className='d-flex flex-column flex-wrap align-content-center'>
      <div className='form'>
        <form method="POST">
          <div className='title my-4 mx-5'>
            <h2>Todo List</h2>
          </div>
          <div className="textField mt-4 mb-1 col-md-">
            <label htmlFor="inputsm">Enter Todo</label>
            <input type="text" className='form-control input-sm' value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
          </div>
          <button type="button" className="btn btn-success btn-sm" onClick={handleAddItem}>Add</button>
        </form>
      </div>
      <div className='todoList'>
        {todoList.map((t, index) => {
          return (
            <div className='container-sm'>
              <div className='card my-4'>
                <div className="card-body">
                  <div className="d-flex">
                    <p className="title mx-auto" key={index}>{t}</p>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Home;

