import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import InvoiceForm from './components/InvoiceForm';
import NavigationBar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer'; // Import the Footer component

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/invoice" element={<InvoiceForm />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer /> {/* Include the Footer component */}
        </div>
      </Router>
    );
  }
}

export default App;
