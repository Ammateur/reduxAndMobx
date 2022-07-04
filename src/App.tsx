import React, { useEffect } from "react";
import "./App.scoped.scss";
import Axios from "axios";
function App() {
  useEffect(() => {
    Axios.get("/userList").then((res) => {
      console.log(res);
    });
  });
  return <div className="App">app</div>;
}

export default App;
