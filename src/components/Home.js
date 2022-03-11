import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HomeGallery from "../components/HomeGallery";
import logo from "../assets/PmgLogo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Ourservices from "./Ourservices";
import Navigation from "./Navigation";

function Home() {
    return (
        <>
            <BrowserRouter>
                <div className="page">
                    <Navigation/>
                    <div className="main">
                        <Routes>
                            <Route path="/" element={<HomeGallery/>}/>
                            <Route path="/Ofirmie" element={<About/>}/>
                            <Route path="/Zakresuslug" element={<Ourservices/>}/>
                            <Route path="/Nasiklienci" element={<Clients/>}/>
                            <Route path="/Kontakt" element={<Contact/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default Home;
