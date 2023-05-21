import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/api/todo';

function App() {
  const [todoList, setTodoList] = useState([]);

  // 코드 중복 방지를 위해 변수로 만들어줌
  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);

    // axios.get('http://localhost:4000/api/todo')
    //   .then((response) => setTodoList(response.data));

    // fetch('http://localhost:4000/api/todo')
    //   .then((response) => response.json())
    //   .then((data) => setTodoList(data));
  };

  // 무한 리렌더링이 되지 않기 위해서는 useEffect를 써야한다!
  useEffect(() => { fetchData() }, []);
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    const done = e.target.done.checked;

    axios.post(SERVER_URL, { text, done });
    fetchData();

    // form을 클릭 했을 때 서버에 요청을 해서 위의 text, done 값을 가져옴
    // fetch("http://localhost:4000/api/todo", {
    //   method: 'POST', 
    //   headers: {
    //     'Content-Type': 'application/json', 
    //   }, 
    //   body: JSON.stringify({
    //     text, 
    //     done, 
    //   }), 
    // }).then(() => fetchData()); // 여기 then을 추가하기 전엔 (추가)버튼 누르고 새로고침 -> 코드추가 후: 바로 리렌더링
  };
  
  return (
    <div className="App">
      <h1>Todo List</h1>

      <form onSubmit={onSubmitHandler}>
        <input name="text"/>
        <input name="done" type='checkbox' />
        <button type="submit">추가</button>
      </form>

      {todoList.map((todo) => (
        <div key={todo.id}>
          <div>
            {todo.id} //
            {todo.text} //
            {todo.done ? 'Y' : 'N'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
