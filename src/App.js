import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Routes from "./Routes.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
