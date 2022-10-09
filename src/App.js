import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CreateStyles} from './styles/global'
import Login from './components/login/index'
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CreateStyles/>
      <Routes>
        
        <Route path='/' element={<Login/> }/>
        <Route path='/list' element={<TodoList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
