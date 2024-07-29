import React from 'react';
import { FcShop } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand">
                            <FcShop /> Electrokart
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link"  >
                                    Home

                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Category" className="nav-link "  >
                                    Category
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Register" className="nav-link" >Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Login" className="nav-link" >Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Cart" className="nav-link" >
                                    Cart  (0)
                                </NavLink>
                            </li>

                        </ul>
                        {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                    </div>
                </div>
            </nav>

        </>
    );
};


export default Header;