import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import Header from './components/Header/Header';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mail from './components/section/Mail'
import EmailList from './components/section/EmailList';
import SendMail from './components/SendMail'
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/login/login'
import { auth } from './lib/firebase';
function App() {
  const dispatch = useDispatch()
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  useEffect(() => {
    auth.onAuthStateChanged(user => {

      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))

      }
    })
  }, [dispatch])
  return (
    <Router>

      {!user ? <Login />
        :
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

      }


    </Router>
  );
}

export default App;
