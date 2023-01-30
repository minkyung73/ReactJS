import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
import Pytorch from './pages/Pytorch';
import MachineLearning from './pages/MachineLearning';
import React_basic from './pages/React_basic';


function App() {
  const BlogName = 'React Blog';
  const [post, setPost] = useState(['머신러닝', '리액트 강좌', '파이토치']);
  const [like, setLike] = useState(0);

  function countUp() {
    setLike(like + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{BlogName}</h4>
      </div>

      <div className="list">
        <h4>
          <Link to="/machine-learning">{post[0]}</Link>
          <br/>
          <span onClick={countUp}> 👍 </span>
          {like} 
        </h4>
        <p>2023.01.27</p>
      </div>

      <div className="list">
        <h4>
          <Link to="/react">{post[1]}</Link> <br/>
          <button onClick={()=>{
            const arr = [1, 2, 3];

            const copy = [...post];
            copy[1] = '딥러닝';

            setPost(copy);
          }}>modified</button>
        </h4>
        <p>2023.01.26</p>
      </div>

      <div className="list">
        <h4>
          <Link to="/pytorch">{post[2]}</Link>
        </h4>
        <p>2023.01.25</p>
      </div>
      <Routes>
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/react" element={<React_basic />} />
        <Route path="/pytorch" element={<Pytorch />} />
      </Routes>
    </div>
  );
}

export default App;


/*
import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Pytorch from "./pages/Pytorch";
import Home from "./pages/Pytorch"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Pytorch</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Pytorch />} />
      </Routes>
    </div>
  );
}

export default App;
*/
