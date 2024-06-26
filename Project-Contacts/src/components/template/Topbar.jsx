import { BsFillBellFill } from "react-icons/bs";
import { IoIosLogOut, IoIosSearch, IoMdSettings } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import avatarDefault from "../../assets/image/undraw_profile.svg";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { FaUser } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { logoutAction } from "../../reducers/actions";
import { Link, useNavigate } from "react-router-dom";
export default function Topbar() {
  let navigate = useNavigate();
  const { authUser, dispatchAuth } = useContext(GlobalContext);

  const [show, setShow] = useState("");
  let handleShowItem = (e, name) => {
    if (show == name) {
      setShow("");
    } else {
      setShow(name);
    }
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <IoIosSearch className="fs-4" />
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <li
          className={`nav-item dropdown no-arrow mx-1 ${
            show == "alert" ? "show" : ""
          }`}
        >
          <a
            onClick={(e) => handleShowItem(e, "alert")}
            className="nav-link dropdown-toggle"
          >
            <BsFillBellFill className="fs-4" />
            <span className="badge badge-danger badge-counter">3+</span>
          </a>
          <div
            className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in  ${
              show == "alert" ? "show" : ""
            }`}
          >
            <h6 className="dropdown-header">Alerts Center</h6>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fas fa-file-alt text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 12, 2019</div>
                <span className="font-weight-bold">
                  A new monthly report is ready to download!
                </span>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-success">
                  <i className="fas fa-donate text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 7, 2019</div>
                $290.29 has been deposited into your account!
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-warning">
                  <i className="fas fa-exclamation-triangle text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 2, 2019</div>
                Spending Alert: Weve noticed unusually high spending for your
                account.
              </div>
            </a>
            <a
              className="dropdown-item text-center small text-gray-500"
              href="#"
            >
              Show All Alerts
            </a>
          </div>
        </li>

        <li
          className={`nav-item dropdown no-arrow mx-1 ${
            show == "email" ? "show" : ""
          }`} >
          <a
            onClick={(e) => handleShowItem(e, "email")}
            className="nav-link dropdown-toggle cursor-pointer"
          >
            <MdEmail className="fs-4" />
            <span className="badge badge-danger badge-counter">7</span>
          </a>
          <div
            className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${
              show == "email" ? "show" : ""
            }`}
          >
            <h6 className="dropdown-header">Message Center</h6>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="img/undraw_profile_1.svg"
                  alt="..."
                />
                <div className="status-indicator bg-success"></div>
              </div>
              <div className="font-weight-bold">
                <div className="text-truncate">
                  Hi there! I am wondering if you can help me with a problem Ive
                  been having.
                </div>
                <div className="small text-gray-500">Emily Fowler · 58m</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="img/undraw_profile_2.svg"
                  alt="..."
                />
                <div className="status-indicator"></div>
              </div>
              <div>
                <div className="text-truncate">
                  I have the photos that you ordered last month, how would you
                  like them sent to you?
                </div>
                <div className="small text-gray-500">Jae Chun · 1d</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="img/undraw_profile_3.svg"
                  alt="..."
                />
                <div className="status-indicator bg-warning"></div>
              </div>
              <div>
                <div className="text-truncate">
                  Last months report looks great, I am very happy with the
                  progress so far, keep up the good work!
                </div>
                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                  alt="..."
                />
                <div className="status-indicator bg-success"></div>
              </div>
              <div>
                <div className="text-truncate">
                  Am I a good boy? The reason I ask is because someone told me
                  that people say this to all dogs, even if they arent good...
                </div>
                <div className="small text-gray-500">Chicken the Dog · 2w</div>
              </div>
            </a>
            <a
              className="dropdown-item text-center small text-gray-500"
              href="#"
            >
              Read More Messages
            </a>
          </div>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        <li
          className={`nav-item dropdown no-arrow ${
            show == "profile" ? "show" : ""
          }`}
        >
          <a
            onClick={(e) => handleShowItem(e, "profile")}
            className="nav-link dropdown-toggle cursor-pointer"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {authUser?.last_name}
            </span>
            <img
              className="img-profile rounded-circle"
              src={authUser?.avatar ? authUser?.avatar : avatarDefault}
              alt="..."
            />
          </a>
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
              show == "profile" ? "show" : ""
            }`}
          >
            <Link
              to={"/profile"}
              onClick={(e) => handleShowItem(e, "")}
              className="dropdown-item d-flex align-items-center"
            >
              <FaUser className="me-2" />
              Profile
            </Link>
            <a
              onClick={(e) => handleShowItem(e, "")}
              className="dropdown-item d-flex align-items-center"
            >
              <IoMdSettings className="me-2" />
              Settings
            </a>
            <a
              onClick={(e) => handleShowItem(e, "")}
              className="dropdown-item d-flex align-items-center"
            >
              <CiCircleList className="me-2" />
              Activity Log
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={(e) => {
                dispatchAuth(logoutAction());
                handleShowItem(e, "");
                navigate("/auth/login");
              }}
              className="dropdown-item d-flex align-items-center cursor-pointer"
            >
              <IoIosLogOut className="me-2" />
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
