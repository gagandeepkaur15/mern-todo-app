import React from 'react';
import Notes from './Notes';

function Home() {
  return (
    <div className='d-flex flex-column flex-wrap'>
      <div className='form'>
        <form action="">
          <div className='title my-4'>
            <h2>Todo List</h2>
          </div>
          <div className="textField my-4 col-md-4">
            <label for="inputsm">Enter Todo</label>
            <input type="text" class='form-control input-sm' />
          </div>
          <button type="button" class="btn btn-primary btn-sm">Add</button>
        </form>
      </div>
      <Notes />
    </div>
  )
}

export default Home;

