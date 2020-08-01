import React from 'react';
import Header from './component/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TinderCards from './component/TinderCards';
import SwipeButtons from './component/SwipeButtons';
import Chats from './component/Chats';
import ChatScreen from './component/ChatScreen';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
