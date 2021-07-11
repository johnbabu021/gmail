import React from 'react';
// import { Counter } from './features/counter/Counter';
import Header from './components/Header/Header';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
