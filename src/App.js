import logo from "./logo.svg";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
/*import { Card } from 'react-bootstrap';*/
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Projetos from "./pages/Projetos";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route
          path="/portfolio"
          element={<a href="/documents/portfolio.pdf" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
