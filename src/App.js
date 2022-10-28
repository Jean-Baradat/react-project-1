import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo"

const App = () => {
    return (
        <>
            <Logo />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
