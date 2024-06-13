import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { increaseCounter, decreaseCounter } from "./redux/action/action";
import Home from "./components/Home";

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => state.counter.count);

  const handleCreates = (type) => {
    if (type === "in") {
      dispatch(increaseCounter());
    }
    if (type === "de") {
      dispatch(decreaseCounter());
    }
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React</h1>
    //     <div>count: {newCount}</div>
    //     <button onClick={() => handleCreates("in")}>Increase Count</button>
    //     <button onClick={() => handleCreates("de")}>Decrease Count</button>
    //   </header>
    // </div>
    <Home/>
  );
}

export default App;
