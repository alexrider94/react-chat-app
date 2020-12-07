import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Chat from './components/chat/Chat';

function App({ chatReducer, mySocketId, enterChatroom, leaveChatroom, sendChat, clearChat }) {
  console.log("src/App.js ", chatReducer);
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/chat/:id"
        render={props => <Chat chatReducer={chatReducer}
          mySocketId={mySocketId}
          leaveChatroom={leaveChatroom} enterChatroom={enterChatroom}
          sendChat={sendChat}
          clearChat={clearChat} />} />
    </Router>
  );
}

export default App;