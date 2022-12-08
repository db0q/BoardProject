import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './pages/About'
import CompletedTaskss from './pages/CompletedTasks'
import Home from './pages/Home'
import LogOut from './pages/LogOut'
import Overview from './pages/Overview'

const App = ()  => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/about"element={<About/>}/>
      <Route path="/completedtasks"element={<CompletedTaskss/>}/>
      <Route path="/home"element={<Home/>}/>
      <Route path="/logout"element={<LogOut/>}/>
      <Route path="/overview"element={<Overview/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}


export default App