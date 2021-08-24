import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar.js";
import Chat from "./components/Chat.js";

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;