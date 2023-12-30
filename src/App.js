import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navs/Navbar';
import Routes from "./Routes.js";
import Footer from "./components/Navs/Footer";
import { HashRouter } from "react-router-dom";
import { initGA } from "./ga.js";

function App() {
  useEffect(() => { initGA(); }, []);

  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
