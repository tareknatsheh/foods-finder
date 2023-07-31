import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then(res => {
        return res.json();
      })
      .then(res => setMsg(res.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{msg ? msg : "loading..."}</p>
      </header>
    </div>
  );
}

export default App;
