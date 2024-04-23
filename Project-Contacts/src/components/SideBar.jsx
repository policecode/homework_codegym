import { useEffect, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFolder2 } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import { FaChevronLeft, FaRegChartBar, FaRegLaughSquint } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { LuWrench } from "react-icons/lu";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function SideBar() {
  // let location = useLocation();
  // console.log(location);
  let [show, setShow] = useState('');
  let [sidebar, setSidebar] = useState(false);
  // useEffect(() => {
  //   setShow(location.pathname);
  // })
  let handleShowItem = (e, name) => {
    if (show == name) {
      setShow('');
    } else {
      setShow(name);
    }
  }
  return (
    <>
      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${sidebar?'toggled':''}`}
        id="accordionSidebar"
      >
        <Link
          to={"/admin"}
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <FaRegLaughSquint />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <NavLink to={"/admin"}  className="nav-link">
            <AiOutlineDashboard className="me-2" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <Link onClick={(e) => handleShowItem(e, 'contact')} className={`nav-link collapsed ${show == 'contact'?'text-white':''}`}>
            <IoMdContacts />
            <span className="mx-2">Contact</span>
          </Link>
          <div id="collapseTwo" className={`collapse ${show == 'contact'?'show':''}`}>
            <div className="bg-white py-2 collapse-inner rounded animated--grow-in">
              <h6 className="collapse-header">Custom Contact:</h6>
              <NavLink to={"/admin/contact/list"} className="collapse-item">List</NavLink>
              <NavLink to={"/admin/contact/create"} className="collapse-item">Create</NavLink>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <LuWrench/>
            <span className="mx-2">Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="utilities-color.html">
                Colors
              </a>
              <a className="collapse-item" href="utilities-border.html">
                Borders
              </a>
              <a className="collapse-item" href="utilities-animation.html">
                Animations
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Other
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Addons</div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <BsFolder2/>
            <span className="mx-2">Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">
                Login
              </a>
              <a className="collapse-item" href="register.html">
                Register
              </a>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">
                404 Page
              </a>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <FaRegChartBar />
            <span  className="mx-2">Charts</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <CiViewTable/>
            <span className="mx-2">Tables</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            onClick={() => setSidebar(!sidebar)}
            className="rounded-circle border-0 text-white"
            style={{backgroundColor: 'rgba(110, 112, 126, 0.5)' ,height: "2.5rem", width: "2.5rem", transform: sidebar?'rotate(180deg)':'' }}
          >
            <FaChevronLeft />
          </button>
        </div>
      </ul>
    </>
  );
}
