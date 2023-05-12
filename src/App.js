import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import View from "./pages/View";
import Logo from "./components/Logo";
import PokedexImage from "./components/PokedexImage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Logo />
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path='/view/:name' element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
