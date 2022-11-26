import logo from "./logo.svg";
import "./App.css";
// import smallImg from "./small.jpeg";
// import bigImg from "./big.jpeg";
import TodoList from "./TodoList";

function App() {
    console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
    console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
    console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);
    return (
        <div className="App">
            {/* <img src={smallImg} alt="small"></img>
            <img src={bigImg} alt="big"></img> */}
            <header className="App-header">
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
            </header>
            <TodoList />
        </div>
    );
}

export default App;
