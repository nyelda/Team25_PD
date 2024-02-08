import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './components/Login';
import User from './components/User';
import Camera from './components/Camera';
import Exercise from './components/Exercise';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/user" element={<User/>} />
            <Route path="/camera" element={<Camera/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
