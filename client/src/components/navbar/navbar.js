import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setItemsToCart } from '../../redux/shopping/actions/cartActions';

function Navbar({ user }) {

  const list = useSelector((state) => state.shop.cart);
  const { totalQty } = list
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItemsToCart())
  }, [dispatch])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0 fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="logo-img" src="./img/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeclassname="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/all-products"
                activeclassname="active"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                activeclassname="active"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/gallery"
                activeclassname="active"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/cards"
                activeclassname="active"
              >
                Sellers
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/cart">
                <i className="cart bi bi-cart4 m-3">{totalQty >= 1 ? totalQty : ''}</i>
              </Link>
            </li>
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/signup"
                    activeclassname="active"
                  >
                    Sign up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/biz"
                    activeclassname="active"
                  >
                    Busniess
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/signin"
                    activeclassname="active"
                  >
                    Log in
                  </NavLink>
                </li>
              </>
            )}

            {user?.biz && (
              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My products
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/display-my-products"
                    >
                      display products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/create-product">
                      create a product
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}

            {user?.biz && (
              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/display-my-cards">
                      display profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/create-card">
                      create a profile
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}

            {user && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/signout"
                    activeclassname="active"
                  >
                    Sign out
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
