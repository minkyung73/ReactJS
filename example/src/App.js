import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import styled from '@emotion/styled';
import Home from './pages/Home';
import Login from './pages/Login';

const activeStyle = {
  color: 'red', 
  TextDecoration: 'underline'
}

const deactiveStyle = {
  color: 'black', 
  textDecoration: 'none'
}

const Li = styled.li({
  width: '30%', 
  margin: '0 auto', 
  '& a': {
    '&.active': {
      borderRadius: '2em', 
      backgroundColor: 'pink'
    }, 
  }, 
});

function App() {
  return (
    <div className="App">
      // activeStyle 속성
      <p>
        <NavLink to="/home" style={({isActive}) => {
          return isActive ? activeStyle : deactiveStyle;
        }}> Home</NavLink>
      </p>
      // activeClassName 속성
      <p>
        <NavLink to="/login" className={({isActive}) => {
          return isActive ? 'orange' : '';
        }}> Login</NavLink>
      </p>
      <hr />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;