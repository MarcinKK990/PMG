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

function Home() {
  return (
    <>
      <BrowserRouter>
        <Container maxWidth={false} disableGutters={true}>
        <Grid container spacing={2}>
          <div className="header">
            <div className="header_logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header_nav">
              <ul className="header_menu">
                <li className="header_element">
                  <p className="header_link">
                    <Link
                      to="/Ofirmie"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      O firmie
                    </Link>
                  </p>
                </li>
                <li className="header_element">
                  <p className="header_link">
                    <Link
                      to="/Zakresuslug"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Zakres usług
                    </Link>
                  </p>
                </li>
                <li className="header_element">
                  <p className="header_link">
                    <Link
                      to="/Nasiklienci"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Nasi klienci
                    </Link>
                  </p>
                </li>
                <li className="header_element">
                  <p className="header_link">
                    <Link
                      to="/Kontakt"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Kontakt
                      <br />
                      Praca
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="main">
            <Routes>
              <Route path="/" element={<HomeGallery />} />
              <Route path="/Ofirmie" element={<About />} />
              <Route path="/Zakresuslug" element={<Ourservices />} />
              <Route path="/Nasiklienci" element={<Clients />} />
              <Route path="/Kontakt" element={<Contact />} />
            </Routes>
          </div>
          <div className="bud">
            <h1>Mobilna wersja storny w budowie. Zapraszamy wkrótce...</h1>
            <div className="logo"></div>
          </div>
          </Grid>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default Home;
