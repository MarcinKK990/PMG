import { NavLink, Link } from "react-router-dom";
import logo from "../assets/PmgLogo.png";
import React, { useState } from "react";

function Navigation() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="nav">
            <Link onClick={() => setOpen(false)} className="nav__logo" to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <div
                onClick={() => setOpen(!isOpen)}
                className={"nav__hamburger  " + (isOpen ? 'is-open' : '')}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={"nav__list  " + (isOpen ? 'is-open' : '')}>
                <li className="nav__item">
                    <NavLink onClick={() => setOpen(!isOpen)} className="nav__link" activeClassName="active" to="/Ofirmie">O firmie</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink onClick={() => setOpen(!isOpen)} className="nav__link" activeClassName="active" to="/Zakresuslug">Zakres usług</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink onClick={() => setOpen(!isOpen)} className="nav__link" activeClassName="active" to="/Nasiklienci">Nasi klienci</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink onClick={() => setOpen(!isOpen)} className="nav__link" activeClassName="active" to="/Kontakt">Kontakt / Praca</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
