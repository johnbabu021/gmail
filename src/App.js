import React from 'react';
// import { Counter } from './features/counter/Counter';
import Header from './components/Header/Header';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Mail from './components/section/Mail'
import EmailList from './components/section/EmailList';
import SendMail from './components/SendMail'
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />

            </Route>
            <Route path="/">
              <EmailList />

            </Route>
          </Switch>
          {sendMessageIsOpen && <SendMail />}
        </div>
      </div>
    </Router>
  );
}

export default App;
