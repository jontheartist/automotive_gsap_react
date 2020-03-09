import React from 'react'
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <nav>
            <div class="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to='/case-studies' exact>
                                    Case Studies
                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/approach' exact>
                                    Approach
                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/services' exact>
                                    Services
                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about-us' exact>
                                    About us
                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <div className="nav-info-label">Email</div>
                                <li>
                                    <NavLink to="/contact" exact>
                                        Get in touch with us
                                 </NavLink>
                                    <NavLink to="/audit" exact>
                                        Get a free audit
                                 </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <div className="nav-info-label">Headquarters</div>
                                <li>Belsize Road</li>
                                <li>25 Street </li>
                                <li>Mayfair, London</li>
                            </ul>
                            <ul className="nav-info">
                                <div className="nav-info-label">Phone</div>
                                <li>+ 208 324 5433</li>
                            </ul>
                            <ul className="nav-info">
                                <div className="nav-info-label">Legal</div>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
