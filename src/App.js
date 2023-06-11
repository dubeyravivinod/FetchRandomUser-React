import "./App.css";
import React, { useState } from "react";
import Menu from "./Components/UI/Menu";
import Users from "./Components/Pages/Users";
import Home from "./Components/Pages/Home";

function App() {
  const [optstate, setOptState] = useState("");

  const MenuHandler = (update) => {
    console.log("Update -- > ", update);
    setOptState(update);
  };
  if (optstate === "Users") {
    return (
      <div className="App">
        <React.Fragment>
          <Menu onSelectedMenu={MenuHandler} />
          <Users />
        </React.Fragment>
      </div>
    );
  } else {
    return (
      <div className="App">
        <React.Fragment>
          <Menu onSelectedMenu={MenuHandler} />
          <Home />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
