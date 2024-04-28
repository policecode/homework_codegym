import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/all.min.css";
import "../assets/css/custom-font.css";
import "../assets/css/sb-admin-2.min.css";
import SideBar from "../components/SideBar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
export default function AdminPage() {
  return (
    <div id="wrapper">
      <ToastContainer />
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Outlet />
        </div>
        <Footer/>
      </div>
    </div>
  );
}
