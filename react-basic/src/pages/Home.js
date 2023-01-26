import React from "react";

function Home() {
    return <h1>Home 화면 입니다.</h1>
}

export default Home;

// 화살표
/*
import React from "react";

const Home = () => {
    return <h1>Home 화면 입니다.</h1>
}

export default Home;
*/

// class형 component (근데 요즘엔 함수형으로 더 많이 개발함)
/*
import React, {Component} from "react";

class Home extends Component {
    render() {
        return <h1>Home 화면 입니다.</h1>
    }
}

export default Home;
*/
