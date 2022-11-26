import logo from "./logo.svg";
import "./App.css";
import "./test.css";
// import smallImg from "./small.jpeg";
// import bigImg from "./big.jpeg";
import TodoList from "./components/todoListBtn/TodoList";
import Button1 from "./components/Btn/button1";
import Button2 from "./components/Btn/button2";
import Box1 from "./components/Box/Box1";

function App() {
    console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
    return (
        <div className="App">
            {/* <img src={smallImg} alt="small"></img>
            <img src={bigImg} alt="big"></img> */}
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
            <TodoList />
            <div>
                <Box1 size="small"></Box1>
                <Box1 size="big"></Box1>
                <Button1 size="big"></Button1>
                <Button1 size="small"></Button1>
                <Button2 size="big"></Button2>
                <Button2 size="small"></Button2>
            </div>
        </div>
    );
}

export default App;
