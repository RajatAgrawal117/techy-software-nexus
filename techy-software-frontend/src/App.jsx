import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Login, Signup } from './pages';
import { NavigationBar } from './components/common';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <NavigationBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login setUser={setUser} />} />
          <Route exact path="/signup" element={<Signup setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
