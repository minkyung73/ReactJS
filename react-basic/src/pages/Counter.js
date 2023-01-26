import React, {useState} from "react";

// (+)버튼을 누르면 1 증가
// (-)버튼을 누르면 1 감소
function Counter() {
    const [num, setNumber] = useState(0);

    function increase() {
        setNumber(num + 1);
        // num = num + 1; // 위 코드랑 같은 의미
    };

    function decrease() {
        setNumber(num - 1);
    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
        
    );
};

export default Counter;