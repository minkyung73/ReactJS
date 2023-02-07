import './App.css';
import { Routes, Route, NavLink, useNavigate, useLocation, useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import About1 from './pages/About1';
import About2 from './pages/About2';
import ManualCounter from './pages/ManualCounter';

const activeStyle = {
  color: 'red', 
  TextDecoration: 'underline'
}

const deactiveStyle = {
  color: 'black', 
  textDecoration: 'none'
}

function App() {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  const goAbout1 = () => {
    setText('About #1 페이지 입니다.')
    navigate('/about1');
  }

  const goAbout2 = () => {
    setText('About #2 페이지 입니다.')
    navigate('/about2');
  }


  return (
    <div className="App">
      // NavLink: activeStyle 속성
      <p>
        <NavLink to="/home" style={({isActive}) => {
          return isActive ? activeStyle : deactiveStyle;
        }}> Home</NavLink>
      </p>
      // NavLink: activeClassName 속성
      <p>
        <NavLink to="/login" className={({isActive}) => {
          return isActive ? 'orange' : '';
        }}> Login</NavLink>
      </p>
      <hr />
      // useNavigate
      <button type="button" onClick={goAbout1}>About1</button>
      <button type="button" onClick={goAbout2}>About2</button>
      <hr />
      // useRef
      <p>
        <Link to ="/ref">ManualCounter</Link>
      </p>
      <hr />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about1" element={<About1 />}></Route>
        <Route path="/about2" element={<About2 />}></Route>
        <Route path="/ref" element={<ManualCounter />}></Route>
      </Routes>
    </div>
  );
}

export default App;