import React, { useEffect, useLayoutEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scoped.scss";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("this is some error");
  });
  const str = "is vscode better than webstorm?";
  useLayoutEffect(() => {
    console.log(str);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
