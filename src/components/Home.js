import React, {useState} from 'react';

function Home() {

  return (
    <div className='container'>
      <form action="">
        <div className='heading'>
            <h2>Todo</h2>
        </div>
        <div className="textField">
            <input type="text" className='form-control'/>
            <div id="helpText">Enter your todo here</div>
        </div>
      </form>
    </div>
  )
}

export default Home;

