import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const BlogName = 'Title';
  const [post, setPost] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [like, setLike] = useState(0);

  function countUp() {
    setLike(like + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{BlogName}</h4>
      </div>

      <button onClick={()=>{
        const copy = [...post];
        copy[0] = '여자 코트 추천';
        setPost(copy);
      }}>modified</button>

      <div className="list">
        <h4>
          {post[0]} <br/>
          <span onClick={countUp}> 👍 </span>
          {like} 
        </h4>
        <p>2023.01.26</p>
      </div>
      <div className="list">
        <h4>{post[1]}</h4>
        <p>2023.01.26</p>
      </div>
      <div className="list">
        <h4>{post[2]}</h4>
        <p>2023.01.26</p>
      </div>
    </div>
  );
}

export default App;
