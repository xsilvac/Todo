import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CreateStyles} from './styles/global'
import Login from './components/login/index'
import TodoList from './components/todoList/index';
import Register from './components/register/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CreateStyles/>
      <Routes>
        
        <Route path='/' element={<Login/> }/>
        <Route path='/list' element={<TodoList/>}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
