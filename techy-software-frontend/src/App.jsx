import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NavigationBar from './components/common/NavigationBar/NavigationBar';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Dashboard and AdminDashboard routes removed */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
