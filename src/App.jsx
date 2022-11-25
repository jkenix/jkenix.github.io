import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Company from "./pages/Company.jsx";

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
