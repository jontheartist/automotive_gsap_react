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
                                <NavLink to="/case-studies" exact>
                                    Case Studies
                                 </NavLink>
                                <NavLink to="/approach" exact>
                                    Approach
                                 </NavLink>
                                <NavLink to="/services" exact>
                                    Services
                                 </NavLink>
                                <NavLink to="/about-us" exact>
                                    About Us
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
                                <li>Route du Jura 49</li>
                                <li>1700 Fribourg</li>
                                <li>Switzerland</li>
                            </ul>
                            <ul className="nav-info">
                                <div className="nav-info-label">Phone</div>
                                <li>+34 4324 3223</li>
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
