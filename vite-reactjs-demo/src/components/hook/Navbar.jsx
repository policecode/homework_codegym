import {  useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useSelector } from "react-redux";
/**
 * Link: Thay cho thể a thông thường
 * NavLink: Tự động thêm class active khi đúng router
 */

export default function Navbar(props) {
  const store = useSelector((state) => state);
  // console.log(store);
  const {theme, changeTheme} = useContext(ThemeContext);
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand" aria-current="page">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/'} className="nav-link" aria-current="page" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/create-product'} className="nav-link" aria-current="page" >Create</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/department'} className="nav-link" aria-current="page" >Department</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/students'} className="nav-link" aria-current="page" >Students</NavLink>
              </li>
              <li className="nav-item">
                <div onClick={changeTheme} className="btn btn-small btn-dark">Change Thene ({theme})</div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
<style>

</style>

