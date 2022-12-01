import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Company from "./pages/Company.jsx";
import Games from "./pages/Games.jsx";
import Career from "./pages/Career.jsx";
import News from "./pages/News.jsx";
import Contacts from "./pages/Contacts.jsx";

export default function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}
